export function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.dataset.theme = currentTheme;
    updateThemeIcon(themeToggle, currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeToggle, newTheme);
        // Dispatch a custom event
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    });

    // Handle focus for accessibility
    themeToggle.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); // Prevent scroll on Space
            themeToggle.click(); // Simulate click
        }
    });
}

function updateThemeIcon(button, theme) {
    button.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
    button.setAttribute('aria-label', theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro');
}
