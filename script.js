document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Year in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Theme Toggle (Optional Enhancement)
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                document.documentElement.style.setProperty('--bg-color', '#f8fafc');
                document.documentElement.style.setProperty('--text-color', '#0f172a');
                document.documentElement.style.setProperty('--secondary-color', '#e2e8f0');
                document.documentElement.style.setProperty('--card-bg', '#ffffff');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                document.documentElement.style.setProperty('--bg-color', '#0f172a');
                document.documentElement.style.setProperty('--text-color', '#e2e8f0');
                document.documentElement.style.setProperty('--secondary-color', '#1e293b');
                document.documentElement.style.setProperty('--card-bg', '#1e293b');
            }
        });
    }
});
