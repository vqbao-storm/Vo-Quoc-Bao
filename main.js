'use strict';

const root = document.documentElement;
const themeButton = document.querySelector('#theme');
const darkPreference = window.matchMedia('(prefers-color-scheme: dark)');

function updateTheme(theme) {
  root.dataset.theme = theme;
  const action = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  themeButton.setAttribute('aria-label', action);
  themeButton.title = action;
}

let chosenTheme;
try {
  chosenTheme = localStorage.getItem('theme');
} catch {
  // The toggle also works when the browser disables persistent storage.
}
function followPreference() {
  const systemTheme = darkPreference.matches ? 'dark' : 'light';
  updateTheme(chosenTheme === 'light' || chosenTheme === 'dark' ? chosenTheme : systemTheme);
}
followPreference();
darkPreference.addEventListener('change', followPreference);
themeButton.hidden = false;
themeButton.addEventListener('click', () => {
  chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  updateTheme(chosenTheme);
  try { localStorage.setItem('theme', chosenTheme); } catch {}
});

const navigation = document.querySelector('#navigation');
const menuButton = document.querySelector('#menu');
const compactHeader = window.matchMedia('(max-width: 650px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
  navigation.hidden = compactHeader.matches && !open;
}

function syncHeader() {
  menuButton.hidden = !compactHeader.matches;
  setMenu(false);
}
syncHeader();
compactHeader.addEventListener('change', syncHeader);
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
