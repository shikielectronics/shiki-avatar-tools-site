(() => {
  const list = document.getElementById('docs-list');
  if (!list) return;
  const entries = window.SHIKI_DOCS || [];

  // The build discovers Markdown files; cards follow the selected site language.
  function render() {
    const locale = document.documentElement.lang;
    list.replaceChildren();
    entries.forEach((entry, index) => {
      const card = document.createElement('article');
      card.className = 'card doc-index-card';
      card.dataset.reveal = '';
      card.style.setProperty('--reveal-delay', `${index * 70}ms`);
      const label = document.createElement('span');
      label.className = 'doc-label';
      label.textContent = entry.slug === 'install' ? 'SHIKI AVATAR TOOLS / COMMON' : 'DOCUMENTATION';
      const heading = document.createElement('h2');
      heading.textContent = entry.titles[locale] || entry.titles.ja;
      const summary = document.createElement('p');
      summary.textContent = entry.summaries[locale] || entry.summaries.ja;
      const link = document.createElement('a');
      link.className = 'inline-link';
      link.href = `./docs/${entry.slug}.html`;
      link.append(document.createTextNode((window.SHIKI_TRANSLATIONS?.[locale]?.docs_open || 'ドキュメントを開く') + ' '));
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('viewBox', '0 0 24 24');
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', './assets/svg/icons.svg#right');
      svg.append(use);
      link.append(svg);
      card.append(label, heading, summary, link);
      list.append(card);
      requestAnimationFrame(() => card.classList.add('is-visible'));
    });
  }
  document.addEventListener('shiki:languagechange', render);
  render();
})();
