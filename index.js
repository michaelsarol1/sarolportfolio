const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const toWhite = theme === 'dark';
    toggle.setAttribute('aria-label', toWhite ? 'Switch to white mode' : 'Switch to black mode');
}

applyTheme(localStorage.getItem('theme') || 'dark');

toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
});
