(() => {
  // Legacy page copy uses the same key order for each of the five locales.
  const keys = 'skip nav_overview nav_news nav_docs nav_license nav_install language appearance top_install back_top overview_title overview_lead button_install button_docs product_desc feature_diagnose feature_diagnose_desc feature_optimize feature_optimize_desc feature_convert feature_convert_desc news_intro news_1_title news_1_body news_note docs_intro docs_start docs_start_body docs_install_link docs_flow step1 step1_body step2 step2_body step3 step3_body docs_features docs_f1 docs_f2 docs_f3 docs_f4 docs_check docs_check_body license_intro license_summary license_full license_notice license_read install_intro install_one install_one_body install_button install_after install_manual install_manual_body copy install_beta copied copy_failed'.split(' ');
  const values = {
    en: [
      'Skip to content','Overview','News','Documentation','License','VCC Install','Language','Appearance','Add to VCC','Back to top',
      'Make avatar creation more flexible.','SHIKI Avatar Tools is a collection of Unity tools for creating and converting avatars. It connects diagnosis, optimization, and VRM conversion in one workflow.','Install with VCC','Read the guide','A Unity Editor extension for avatar diagnostics, optimization, and VRM 0.x / 1.0 conversion.','Diagnose','Inspect the avatar structure before conversion.','Optimize','Reduce meshes and remove hidden surfaces.','Convert to VRM','Convert expressions, spring bones, materials, and more.',
      'Development and distribution updates','The SHIKI Avatar Tools information site is ready','Find the tool overview, installation steps, basic guide, and license here.','Check the VCC package information for distribution updates.',
      'A basic guide to getting started with Avatar Transmute','Getting started','Add the package to a Unity 2022.3 avatar project through VCC. For beta versions, enable Settings → Packages → Show Pre-Release Packages in VCC.','VCC installation steps','Basic workflow','Inspect the avatar','Check the original avatar, outfit, expressions, and moving parts.','Choose optimization','Configure mesh and hidden-surface processing, then preview the result.','Convert and verify','Export VRM 0.x / 1.0 for your target and check materials, expressions, and bones.','Conversion features','Expressions, spring bones, and colliders','lilToon to MToon material conversion','Unused meshes and hidden-surface cleanup','Public API for other Editor extensions','Before export','For beta versions, back up your project before conversion. Check outfit rigging, expressions, transparency, moving parts, and colliders on the target platform after export.',
      'Use, modification, and redistribution','Avatar Transmute code is licensed under MIT. You may use, modify, and redistribute it while keeping the copyright notice and license text.','Full license','The original English text appears below. Avatars, clothing, textures, dependencies, and other third-party assets may have separate terms.','Read the MIT License',
      'Add through VRChat Creator Companion','Add the SHIKI repository to VCC','On a PC with VCC installed, use the button below. Approve the browser prompt and confirm the repository in VCC.','Add repository to VCC','Then open Manage Project for your project and add Avatar Transmute.','If the button does not open VCC','Enter this URL in VCC under Settings → Packages → Add Repository.','Copy','If you cannot see beta packages, enable Settings → Packages → Show Pre-Release Packages.','URL copied','Could not copy. Select the URL and copy it manually.'
    ],
    ko: [
      '본문으로 이동','개요','소식','문서','라이선스','VCC 설치','언어','테마','VCC에 추가','맨 위로',
      '아바타 제작을 더욱 자유롭게.','SHIKI Avatar Tools는 Unity에서 아바타를 제작하고 변환할 수 있도록 돕는 도구 모음입니다. 진단부터 최적화, VRM 변환까지 하나의 작업 흐름으로 연결합니다.','VCC로 설치','사용법 보기','아바타 진단, 최적화 및 VRM 0.x / 1.0 변환을 위한 Unity Editor 확장 기능입니다.','진단','변환 전에 아바타 구성을 확인합니다.','최적화','메시를 줄이고 가려진 면을 정리합니다.','VRM 변환','표정, 흔들리는 파츠, 머티리얼 등을 변환합니다.',
      '개발 및 배포 소식','SHIKI Avatar Tools 안내 페이지를 만들었습니다','도구 개요, 설치 방법, 기본 사용법 및 라이선스를 한곳에 정리했습니다.','배포 버전의 변경 사항은 VCC 패키지 정보를 확인해 주세요.',
      'Avatar Transmute 시작을 위한 기본 안내','시작하기','VCC를 통해 Unity 2022.3 아바타 프로젝트에 패키지를 추가합니다. 베타 버전을 설치하려면 VCC의 Settings → Packages → Show Pre-Release Packages를 켜세요.','VCC 설치 방법','기본 작업 흐름','아바타 진단','원본 아바타와 의상, 표정, 흔들리는 파츠의 상태를 확인합니다.','최적화 설정','메시와 가려진 면의 처리 방식을 설정하고 결과를 미리 봅니다.','변환 및 확인','용도에 맞게 VRM 0.x / 1.0으로 내보내고 머티리얼, 표정, 본 동작을 확인합니다.','변환 기능','표정, 흔들리는 파츠, 콜라이더','lilToon에서 MToon으로 머티리얼 변환','불필요한 메시 및 가려진 면 정리','다른 Editor 확장에서 사용할 수 있는 공개 API','내보내기 전 확인','베타 버전에서는 변환 전에 프로젝트를 백업하세요. 내보낸 뒤에는 대상 플랫폼에서 의상 본, 표정, 투명한 부분, 흔들리는 파츠와 콜라이더를 확인해 주세요.',
      '사용, 수정 및 재배포','Avatar Transmute의 코드는 MIT 라이선스를 따릅니다. 저작권 고지와 라이선스 문구를 유지하면 사용, 수정 및 재배포할 수 있습니다.','라이선스 원문','아래에 영어 원문을 게재합니다. 아바타, 의상, 텍스처, 의존 패키지 등 제3자 자료에는 별도의 이용 조건이 적용될 수 있습니다.','MIT 라이선스 원문 보기',
      'VRChat Creator Companion에서 추가','SHIKI 저장소를 VCC에 추가','VCC가 설치된 PC에서 아래 버튼을 누르세요. 브라우저 알림을 허용하고 VCC에서 저장소 추가를 확인합니다.','VCC에 저장소 추가','추가한 뒤 해당 프로젝트의 Manage Project에서 Avatar Transmute를 추가합니다.','버튼으로 열리지 않을 때','VCC의 Settings → Packages → Add Repository에 다음 URL을 입력하세요.','복사','베타 패키지가 보이지 않으면 Settings → Packages → Show Pre-Release Packages를 켜세요.','URL을 복사했습니다','복사하지 못했습니다. URL을 선택하여 직접 복사하세요.'
    ],
    'zh-CN': [
      '跳转到正文','概览','动态','文档','许可证','VCC 安装','语言','外观','添加到 VCC','返回顶部',
      '让虚拟形象创作更加自由。','SHIKI Avatar Tools 是一套支持在 Unity 中制作和转换虚拟形象的工具。从检查、优化到 VRM 转换，贯通整个工作流程。','通过 VCC 安装','查看使用指南','用于虚拟形象检查、优化及 VRM 0.x / 1.0 转换的 Unity Editor 扩展。','检查','在转换前检查虚拟形象的结构。','优化','精简网格并清理被遮挡的面。','VRM 转换','转换表情、动态骨骼、材质等。',
      '开发与发布动态','SHIKI Avatar Tools 介绍页面已创建','这里汇总了工具概览、安装步骤、基础指南和许可证。','发行版的更新内容请查看 VCC 中的包信息。',
      'Avatar Transmute 入门指南','开始使用','通过 VCC 将包添加到 Unity 2022.3 虚拟形象项目。安装测试版时，请在 VCC 中开启 Settings → Packages → Show Pre-Release Packages。','VCC 安装步骤','基本流程','检查虚拟形象','确认原始形象、服装、表情和动态部件的状态。','选择优化设置','配置网格和隐藏面处理，并预览结果。','转换并验证','按用途导出 VRM 0.x / 1.0，检查材质、表情和骨骼的运行情况。','转换功能','表情、动态骨骼和碰撞体','将 lilToon 材质转换为 MToon','清理无用网格和隐藏面','供其他 Editor 扩展调用的公开 API','导出前请确认','使用测试版时，请在转换前备份项目。导出后在目标平台检查服装骨骼、表情、透明部分、动态部件和碰撞体。',
      '使用、修改和再分发','Avatar Transmute 的代码采用 MIT 许可证。保留版权声明和许可证文本即可使用、修改和再分发。','许可证全文','下方提供英文原文。虚拟形象、服装、贴图、依赖包等第三方素材可能适用其他条款。','阅读 MIT 许可证原文',
      '通过 VRChat Creator Companion 添加','将 SHIKI 软件源添加到 VCC','请在已安装 VCC 的电脑上点击下方按钮。允许浏览器打开 VCC，并确认添加软件源。','将软件源添加到 VCC','添加后，打开项目的 Manage Project，加入 Avatar Transmute。','按钮无法打开时','在 VCC 的 Settings → Packages → Add Repository 中输入以下 URL。','复制','如果找不到测试版，请开启 Settings → Packages → Show Pre-Release Packages。','已复制 URL','复制失败。请选择 URL 并手动复制。'
    ],
    'zh-TW': [
      '跳至主要內容','概覽','最新消息','文件','授權條款','VCC 安裝','語言','外觀','加入 VCC','回到頂端',
      '讓虛擬角色創作更自由。','SHIKI Avatar Tools 是一套協助在 Unity 製作與轉換虛擬角色的工具。從檢查、最佳化到 VRM 轉換，串起整個工作流程。','透過 VCC 安裝','查看使用指南','用於虛擬角色檢查、最佳化及 VRM 0.x / 1.0 轉換的 Unity Editor 擴充功能。','檢查','轉換前先確認虛擬角色的結構。','最佳化','精簡網格並清理被遮住的面。','VRM 轉換','轉換表情、動態骨骼與材質等。',
      '開發與發布消息','SHIKI Avatar Tools 介紹頁面已建立','這裡整理了工具概覽、安裝步驟、基本指南與授權條款。','發行版本的更新內容請查看 VCC 中的套件資訊。',
      'Avatar Transmute 入門指南','開始使用','透過 VCC 將套件加入 Unity 2022.3 虛擬角色專案。安裝測試版時，請在 VCC 開啟 Settings → Packages → Show Pre-Release Packages。','VCC 安裝步驟','基本流程','檢查虛擬角色','確認原始角色、服裝、表情及動態部件的狀態。','選擇最佳化設定','設定網格與隱藏面處理，並預覽結果。','轉換並驗證','依用途匯出 VRM 0.x / 1.0，檢查材質、表情與骨骼的運作。','轉換功能','表情、動態骨骼與碰撞體','將 lilToon 材質轉換為 MToon','清理未使用的網格與隱藏面','供其他 Editor 擴充功能呼叫的公開 API','匯出前請確認','使用測試版時，請在轉換前備份專案。匯出後在目標平台檢查服裝骨骼、表情、透明部分、動態部件與碰撞體。',
      '使用、修改與再散布','Avatar Transmute 的程式碼採用 MIT 授權。保留著作權聲明與授權條款文字，即可使用、修改及再散布。','授權條款全文','下方提供英文原文。虛擬角色、服裝、材質貼圖、相依套件等第三方素材可能適用其他條款。','閱讀 MIT 授權原文',
      '透過 VRChat Creator Companion 加入','將 SHIKI 套件庫加入 VCC','請在已安裝 VCC 的電腦上點擊下方按鈕。允許瀏覽器開啟 VCC，並確認加入套件庫。','將套件庫加入 VCC','加入後，在專案的 Manage Project 中加入 Avatar Transmute。','按鈕無法開啟時','在 VCC 的 Settings → Packages → Add Repository 輸入以下 URL。','複製','若找不到測試版，請開啟 Settings → Packages → Show Pre-Release Packages。','已複製 URL','無法複製。請選取 URL 手動複製。'
    ]
  };
  const productWords = {
    // Product detail copy lives here; shared navigation and VPM copy are in extra.js.
    ja:{button_detail:'詳しくみる',back_overview:'概要に戻る',detail_lead:'診断から軽量化、VRM 出力まで。アバターの変換作業をひとつの流れで進められます。',detail_diagnose:'01 / 診断',detail_diagnose_body:'変換前にアバターの構成、衣装、表情や揺れ物の状態を確認します。',detail_optimize:'02 / 軽量化',detail_optimize_body:'メッシュ削減や隠れた面の整理を選択し、出力結果をプレビューします。',detail_convert:'03 / VRM 変換',detail_convert_body:'VRM 0.x / 1.0 に出力し、表情、揺れ物、コライダー、マテリアルの変換結果を確認します。',detail_before:'使う前に',detail_before_body:'Unity 2022.3 のプロジェクトで利用します。β版の変換前にはプロジェクトをバックアップし、出力後に見た目と動作を確認してください。'},
    ko:{button_detail:'자세히 보기',back_overview:'개요로 돌아가기',detail_lead:'진단과 최적화부터 VRM 출력까지 아바타 변환을 한 흐름으로 진행하세요.',detail_diagnose:'01 / 진단',detail_diagnose_body:'변환 전에 아바타 구조, 의상, 표정 및 움직이는 파츠를 확인합니다.',detail_optimize:'02 / 최적화',detail_optimize_body:'메시 축소와 숨겨진 면 정리를 선택하고 결과를 미리 봅니다.',detail_convert:'03 / VRM 변환',detail_convert_body:'VRM 0.x / 1.0으로 출력하고 표정, 스프링 본, 콜라이더 및 머티리얼을 확인합니다.',detail_before:'시작하기 전에',detail_before_body:'Unity 2022.3 프로젝트에서 사용합니다. 베타 버전에서 변환하기 전에 프로젝트를 백업하고 출력 후 모양과 동작을 확인하세요.'},
    'zh-CN':{button_detail:'了解详情',back_overview:'返回概览',detail_lead:'从诊断、优化到 VRM 导出，在同一流程中完成头像转换。',detail_diagnose:'01 / 诊断',detail_diagnose_body:'转换前检查头像结构、服装、表情和动态部件。',detail_optimize:'02 / 优化',detail_optimize_body:'选择网格简化和隐藏面的清理，并预览结果。',detail_convert:'03 / VRM 转换',detail_convert_body:'导出 VRM 0.x / 1.0，并检查表情、弹簧骨、碰撞体和材质。',detail_before:'使用前',detail_before_body:'适用于 Unity 2022.3 项目。使用测试版转换前请备份项目，并在导出后检查外观和动作。'},
    'zh-TW':{button_detail:'瞭解詳情',back_overview:'返回概要',detail_lead:'從診斷、最佳化到 VRM 匯出，在同一流程中完成虛擬化身轉換。',detail_diagnose:'01 / 診斷',detail_diagnose_body:'轉換前檢查虛擬化身結構、服裝、表情與動態部件。',detail_optimize:'02 / 最佳化',detail_optimize_body:'選擇網格簡化和隱藏面的整理，並預覽結果。',detail_convert:'03 / VRM 轉換',detail_convert_body:'匯出 VRM 0.x / 1.0，並檢查表情、彈簧骨、碰撞體與材質。',detail_before:'使用前',detail_before_body:'適用於 Unity 2022.3 專案。使用測試版轉換前請備份專案，匯出後確認外觀與動作。'},
    en:{button_detail:'View details',back_overview:'Back to overview',detail_lead:'Move from inspection and optimization to VRM export in a single avatar conversion workflow.',detail_diagnose:'01 / Diagnose',detail_diagnose_body:'Inspect the avatar structure, outfit, expressions, and moving parts before conversion.',detail_optimize:'02 / Optimize',detail_optimize_body:'Choose mesh reduction and hidden-surface cleanup, then preview the result.',detail_convert:'03 / Convert to VRM',detail_convert_body:'Export VRM 0.x / 1.0 and check expressions, spring bones, colliders, and materials.',detail_before:'Before you begin',detail_before_body:'Use a Unity 2022.3 project. Back up your project before beta conversions, then verify the appearance and behavior after export.'}
  };
  const root = document.documentElement;
  const themeButton = document.getElementById('theme-toggle');
  const settingsButton = document.getElementById('settings-button');
  const settingsPanel = document.getElementById('settings-panel');
  const sidebarButton = document.getElementById('sidebar-toggle');
  const navGroups = [...document.querySelectorAll('[data-nav-group]')];
  const glow = document.querySelector('.cursor-glow');
  const languageControls = [...document.querySelectorAll('#language-select')];
  const page = document.body.dataset.page;
  const pageKeys = {overview:'nav_overview',news:'nav_news',docs:'nav_docs',docs_install:'common_title',docs_at:'nav_docs_at',license:'nav_license',install:'nav_install',donate:'nav_donate',vpm:'nav_install'};
  const jpMessages = {copied:'URL をコピーしました',copy_failed:'コピーできませんでした。URL を選択してコピーしてください。'};
  const settingsWords = {
    ja:{name:'設定',open:'設定を開く',close:'設定を閉じる',light:'ライトテーマに切り替える',dark:'ダークテーマに切り替える',expand:'サイドバーを展開する',collapse:'サイドバーを折りたたむ'},
    ko:{name:'설정',open:'설정 열기',close:'설정 닫기',light:'라이트 테마로 전환',dark:'다크 테마로 전환',expand:'사이드바 펼치기',collapse:'사이드바 접기'},
    'zh-CN':{name:'设置',open:'打开设置',close:'关闭设置',light:'切换到浅色主题',dark:'切换到深色主题',expand:'展开侧边栏',collapse:'收起侧边栏'},
    'zh-TW':{name:'設定',open:'開啟設定',close:'關閉設定',light:'切換至淺色主題',dark:'切換至深色主題',expand:'展開側邊欄',collapse:'收合側邊欄'},
    en:{name:'Settings',open:'Open settings',close:'Close settings',light:'Switch to light theme',dark:'Switch to dark theme',expand:'Expand sidebar',collapse:'Collapse sidebar'}
  };
  let locale = 'ja';
  function translation(key) {
    if (key === 'settings') return settingsWords[locale].name;
    if (productWords[locale]?.[key]) return productWords[locale][key];
    if (window.SHIKI_EXTRA?.[locale]?.[key]) return window.SHIKI_EXTRA[locale][key];
    if (locale === 'ja') return jpMessages[key];
    return values[locale]?.[keys.indexOf(key)];
  }
  function applyTheme(theme) {
    // Keep the visual state, accessible label, browser chrome, and cursor glow in sync.
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', settingsWords[locale][theme === 'dark' ? 'light' : 'dark']);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#212121' : '#f2f2f2';
    if (theme === 'light') glow.classList.remove('visible');
  }
  function applySidebar(sidebar) {
    root.dataset.sidebar = sidebar;
    sidebarButton.setAttribute('aria-expanded', String(sidebar === 'expanded'));
    sidebarButton.setAttribute('aria-label', settingsWords[locale][sidebar === 'expanded' ? 'collapse' : 'expand']);
  }
  try {
    const savedSidebar = localStorage.getItem('shiki-sidebar');
    applySidebar(savedSidebar === 'collapsed' || savedSidebar === 'expanded' ? savedSidebar : matchMedia('(max-width:1100px)').matches ? 'collapsed' : 'expanded');
  } catch { applySidebar(matchMedia('(max-width:1100px)').matches ? 'collapsed' : 'expanded'); }
  sidebarButton.addEventListener('click', () => {
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
    const activeChild = !!group.querySelector('[aria-current="page"]');
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
  });
  function applyLanguage(choice) {
    locale = choice in values || choice === 'ja' ? choice : 'ja';
    root.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      if (!node.dataset.japanese) node.dataset.japanese = node.textContent;
      node.textContent = translation(node.dataset.i18n) || node.dataset.japanese;
    });
    languageControls.forEach(control => control.value = locale);
    settingsButton.setAttribute('aria-label', settingsWords[locale][settingsPanel.hidden ? 'open' : 'close']);
    themeButton.setAttribute('aria-label', settingsWords[locale][root.dataset.theme === 'dark' ? 'light' : 'dark']);
    sidebarButton.setAttribute('aria-label', settingsWords[locale][root.dataset.sidebar === 'expanded' ? 'collapse' : 'expand']);
    navGroups.forEach(group => group.querySelector('.nav-disclosure').setAttribute('aria-label', translation(`nav_${group.dataset.navGroup}`)));
    document.title = `${translation(pageKeys[page]) || document.querySelector('h1')?.textContent || 'SHIKI Avatar Tools'} — SHIKI™`;
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
