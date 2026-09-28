(() => {
  // Text is generated from content/locales/*.json. Keep this file for behavior.
  const messages = window.SHIKI_TRANSLATIONS;
  if (!messages) throw new Error('Missing translations.js. Run python3 build_pages.py.');
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const settingsButton = document.getElementById('settings-button');
  const settingsPanel = document.getElementById('settings-panel');
  const sidebarButton = document.getElementById('sidebar-toggle');
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const sidebar = document.getElementById('site-sidebar');
  const mobileBackdrop = document.createElement('div');
  mobileBackdrop.className = 'mobile-backdrop';
  mobileBackdrop.setAttribute('aria-hidden', 'true');
  sidebar.insertAdjacentElement('afterend', mobileBackdrop);
  const navGroups = [...document.querySelectorAll('[data-nav-group]')];
  const glow = document.querySelector('.cursor-glow');
  const languageControls = [...document.querySelectorAll('#language-select')];
  const page = document.body.dataset.page;
  const pageKeys = {overview:'nav_overview',news:'nav_news',docs:'nav_docs',docs_install:'common_title',docs_at:'nav_docs_at',license:'nav_license',install:'nav_install',donate:'nav_donate',support:'nav_support',vpm:'nav_install'};
  const settingsWords = {
    ja:{name:'設定',open:'設定を開く',close:'設定を閉じる',light:'ライトテーマに切り替える',dark:'ダークテーマに切り替える',expand:'サイドバーを展開する',collapse:'サイドバーを折りたたむ',menuOpen:'メニューを開く',menuClose:'メニューを閉じる'},
    ko:{name:'설정',open:'설정 열기',close:'설정 닫기',light:'라이트 테마로 전환',dark:'다크 테마로 전환',expand:'사이드바 펼치기',collapse:'사이드바 접기',menuOpen:'메뉴 열기',menuClose:'메뉴 닫기'},
    'zh-CN':{name:'设置',open:'打开设置',close:'关闭设置',light:'切换到浅色主题',dark:'切换到深色主题',expand:'展开侧边栏',collapse:'收起侧边栏',menuOpen:'打开菜单',menuClose:'关闭菜单'},
    'zh-TW':{name:'設定',open:'開啟設定',close:'關閉設定',light:'切換至淺色主題',dark:'切換至深色主題',expand:'展開側邊欄',collapse:'收合側邊欄',menuOpen:'開啟選單',menuClose:'關閉選單'},
    en:{name:'Settings',open:'Open settings',close:'Close settings',light:'Switch to light theme',dark:'Switch to dark theme',expand:'Expand sidebar',collapse:'Collapse sidebar',menuOpen:'Open menu',menuClose:'Close menu'}
  };
  let locale = 'ja';
  let themeColorTimer;
  function translation(key) {
    return messages[locale]?.[key] ?? messages.ja[key];
  }
  function applyTheme(theme) {
    // Keep the visual state, accessible label, browser chrome, and cursor glow in sync.
    const fading = root.classList.contains('theme-ready') && !matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (fading) root.classList.add('theme-changing');
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', settingsWords[locale][theme === 'dark' ? 'light' : 'dark']);
    // Browser chrome changes after the page fade instead of flashing ahead of it.
    clearTimeout(themeColorTimer);
    const updateChrome = () => { document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#212121' : '#f2f2f2'; };
    if (fading) themeColorTimer = setTimeout(() => {
      updateChrome();
      root.classList.remove('theme-changing');
    }, 720);
    else { root.classList.remove('theme-changing'); updateChrome(); }
    if (theme === 'light') glow.classList.remove('visible');
  }
  function applySidebar(sidebar) {
    root.dataset.sidebar = sidebar;
    sidebarButton.setAttribute('aria-expanded', String(sidebar === 'expanded'));
    sidebarButton.setAttribute('aria-label', settingsWords[locale][sidebar === 'expanded' ? 'collapse' : 'expand']);
  }
  const mobileQuery = matchMedia('(max-width:760px)');
  function setMobileMenu(open, returnFocus = false) {
    const isOpen = mobileQuery.matches && open;
    root.dataset.mobileMenu = isOpen ? 'open' : 'closed';
    mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
    mobileMenuButton.setAttribute('aria-label', settingsWords[locale][isOpen ? 'menuClose' : 'menuOpen']);
    sidebar.inert = mobileQuery.matches && !isOpen;
    if (!isOpen && !settingsPanel.hidden) setSettingsOpen(false);
    if (isOpen) sidebarButton.focus();
    else if (returnFocus) mobileMenuButton.focus();
  }
  setMobileMenu(false);
  mobileMenuButton.addEventListener('click', () => setMobileMenu(root.dataset.mobileMenu !== 'open'));
  mobileBackdrop.addEventListener('click', () => setMobileMenu(false, true));
  mobileQuery.addEventListener('change', () => setMobileMenu(false));
  try {
    const savedSidebar = localStorage.getItem('shiki-sidebar');
    applySidebar(savedSidebar === 'collapsed' || savedSidebar === 'expanded' ? savedSidebar : matchMedia('(max-width:1100px)').matches ? 'collapsed' : 'expanded');
  } catch { applySidebar(matchMedia('(max-width:1100px)').matches ? 'collapsed' : 'expanded'); }
  sidebarButton.addEventListener('click', () => {
    if (mobileQuery.matches) { setMobileMenu(false, true); return; }
    const next = root.dataset.sidebar === 'expanded' ? 'collapsed' : 'expanded';
    applySidebar(next);
    try { localStorage.setItem('shiki-sidebar', next); } catch {}
  });
  function setNavGroupOpen(group, open, remember = true) {
    // The branch uses the native hidden state so keyboard and screen reader users
    // do not tab into links inside a closed group.
    const button = group.querySelector('.nav-disclosure');
    group.querySelector('.nav-branch').hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (remember) try { localStorage.setItem(`shiki-nav-${group.dataset.navGroup}`, String(open)); } catch {}
  }
  navGroups.forEach(group => {
    // Reopen the active page's group on desktop; mobile menus start closed.
    let saved = false;
    try { saved = localStorage.getItem(`shiki-nav-${group.dataset.navGroup}`) === 'true'; } catch {}
    const activeChild = !!group.querySelector('[aria-current="page"]') || (page === 'doc' && group.dataset.navGroup === 'docs');
    setNavGroupOpen(group, !matchMedia('(max-width:760px)').matches && (activeChild || saved), false);
    group.querySelector('.nav-disclosure').addEventListener('click', () => {
      const wasCollapsed = root.dataset.sidebar === 'collapsed' && matchMedia('(min-width:761px)').matches;
      if (wasCollapsed) {
        applySidebar('expanded');
        try { localStorage.setItem('shiki-sidebar', 'expanded'); } catch {}
      }
      const next = wasCollapsed || group.querySelector('.nav-branch').hidden;
      if (matchMedia('(max-width:760px)').matches && next) navGroups.filter(other => other !== group).forEach(other => setNavGroupOpen(other, false));
      setNavGroupOpen(group, next);
    });
  });
  try { applyTheme(localStorage.getItem('shiki-theme') === 'light' ? 'light' : 'dark'); } catch { applyTheme('dark'); }
  // Enable transitions only after restoring the saved theme to avoid a flash on load.
  requestAnimationFrame(() => root.classList.add('theme-ready'));
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('shiki-theme', next); } catch {}
  });
  function setSettingsOpen(open) {
    settingsPanel.hidden = !open;
    settingsButton.setAttribute('aria-expanded', String(open));
    settingsButton.setAttribute('aria-label', settingsWords[locale][open ? 'close' : 'open']);
    if (open) document.getElementById('language-select').focus();
  }
  settingsButton.addEventListener('click', () => setSettingsOpen(settingsPanel.hidden));
  settingsPanel.addEventListener('pointerdown', event => event.stopPropagation());
  document.addEventListener('pointerdown', event => {
    const path = event.composedPath();
    if (!settingsPanel.hidden && !path.includes(settingsPanel) && !path.includes(settingsButton)) setSettingsOpen(false);
    if (matchMedia('(max-width:760px)').matches && !navGroups.some(group => path.includes(group))) {
      navGroups.forEach(group => { if (!group.querySelector('.nav-branch').hidden) setNavGroupOpen(group, false); });
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !settingsPanel.hidden) { setSettingsOpen(false); settingsButton.focus(); }
    if (event.key === 'Escape') navGroups.forEach(group => { if (!group.querySelector('.nav-branch').hidden) setNavGroupOpen(group, false); });
    if (event.key === 'Escape' && root.dataset.mobileMenu === 'open') setMobileMenu(false, true);
  });
  function applyLanguage(choice) {
    locale = Object.hasOwn(messages, choice) ? choice : 'ja';
    root.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      // The HTML is the editable Japanese source; retain it when switching back.
      if (!node.dataset.japanese) node.dataset.japanese = node.textContent.trim().replace(/\s+/g, ' ');
      node.textContent = locale === 'ja' ? node.dataset.japanese : (translation(node.dataset.i18n) || node.dataset.japanese);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(node => {
      if (!node.dataset.japaneseAlt) node.dataset.japaneseAlt = node.getAttribute('alt') || '';
      node.setAttribute('alt', locale === 'ja' ? node.dataset.japaneseAlt : (translation(node.dataset.i18nAlt) || node.dataset.japaneseAlt));
    });
    // A rendered Markdown guide has one section per available language.
    const guides = [...document.querySelectorAll('[data-doc-locale]')];
    if (guides.length) {
      const shown = guides.some(guide => guide.dataset.docLocale === locale) ? locale : 'ja';
      guides.forEach(guide => { guide.hidden = guide.dataset.docLocale !== shown; });
    }
    languageControls.forEach(control => control.value = locale);
    settingsButton.setAttribute('aria-label', settingsWords[locale][settingsPanel.hidden ? 'open' : 'close']);
    themeButton.setAttribute('aria-label', settingsWords[locale][root.dataset.theme === 'dark' ? 'light' : 'dark']);
    sidebarButton.setAttribute('aria-label', settingsWords[locale][root.dataset.sidebar === 'expanded' ? 'collapse' : 'expand']);
    mobileMenuButton.setAttribute('aria-label', settingsWords[locale][root.dataset.mobileMenu === 'open' ? 'menuClose' : 'menuOpen']);
    navGroups.forEach(group => group.querySelector('.nav-disclosure').setAttribute('aria-label', translation(`nav_${group.dataset.navGroup}`)));
    const visibleTitle = document.querySelector('[data-doc-locale]:not([hidden]) h1')?.textContent;
    document.title = `${visibleTitle || translation(pageKeys[page]) || document.querySelector('h1')?.textContent || 'SHIKI Avatar Tools'} — SHIKI™`;
    document.dispatchEvent(new CustomEvent('shiki:languagechange', {detail:{locale}}));
    try { localStorage.setItem('shiki-language', locale); } catch {}
  }
  let selected = 'ja';
  try { selected = localStorage.getItem('shiki-language') || 'ja'; } catch {}
  applyLanguage(selected);
  languageControls.forEach(control => control.addEventListener('change', () => applyLanguage(control.value)));
  const copy = document.getElementById('copy-url');
  if (copy) copy.addEventListener('click', async () => {
    const feedback = document.getElementById('copy-feedback');
    try { await navigator.clipboard.writeText(document.getElementById('repo-url').textContent.trim()); feedback.textContent = translation('copied'); }
    catch { feedback.textContent = translation('copy_failed'); }
  });
  if (matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches) {
    // Pointer glow stays off in the light theme, including after switching.
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    document.addEventListener('pointermove', event => { tx = event.clientX; ty = event.clientY; if (root.dataset.theme === 'dark') glow.classList.add('visible'); }, {passive:true});
    document.addEventListener('pointerleave', () => glow.classList.remove('visible'));
    function frame() { x += (tx-x)*.14; y += (ty-y)*.14; glow.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`; requestAnimationFrame(frame); }
    requestAnimationFrame(frame);
  }
  document.querySelectorAll('.card, .mini-card').forEach(card => card.setAttribute('data-reveal', ''));
  // Cards remain visible when IntersectionObserver or animation is unavailable.
  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  if (revealItems.length && !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, {threshold: 0.08, rootMargin: '0px 0px 32px 0px'});
    document.documentElement.classList.add('reveal-ready');
    revealItems.forEach(item => observer.observe(item));
  }
})();
