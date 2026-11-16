/* Minimal JavaScript: theme switching, mobile navigation, copyright year. */
(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  let storedTheme = null;
  try { storedTheme = localStorage.getItem('personal-site-theme'); } catch (_) { /* Private browsing can block storage. */ }
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = (storedTheme === 'light' || storedTheme === 'dark') ? storedTheme : (systemPrefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    themeButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }
  setTheme(initialTheme);
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('personal-site-theme', next); } catch (_) { /* Optional persistence. */ }
  });

  function closeMenu() {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();
})();
