const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');

function updateButtonContent(theme) {
  if (theme === 'dark') toggleBtn.textContent = '☀️';
  else if (theme === 'light') toggleBtn.textContent = '🌙';
  else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleBtn.textContent = systemPrefersDark ? '☀️' : '🌙';
  }
}

const saved = JSON.parse(localStorage.getItem('themeData') || 'null');
let savedTheme = null;

if (saved) {
  const now = Date.now();
  if (now - saved.timestamp < 2 * 24 * 60 * 60 * 1000) {
    savedTheme = saved.theme;
    root.setAttribute('data-theme', savedTheme);
  } else localStorage.removeItem('themeData');
}

updateButtonContent(savedTheme || null);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (!localStorage.getItem('themeData')) {
    root.removeAttribute('data-theme');
    updateButtonContent(null);
  }
});

toggleBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let newTheme;
  if (currentTheme === 'dark') newTheme = 'light';
  else if (currentTheme === 'light') newTheme = 'dark';
  else newTheme = systemPrefersDark ? 'light' : 'dark';

  root.setAttribute('data-theme', newTheme);
  localStorage.setItem('themeData', JSON.stringify({
    theme: newTheme,
    timestamp: Date.now()
  }));
  updateButtonContent(newTheme);
});
