// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// Dynamic header style shift on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Console note
window.addEventListener('DOMContentLoaded', () => {
    console.log(
        `%c
  ABHISHEK BAGDE — PORTFOLIO
  ==========================
  Role:  System Software Engineer @ NVIDIA
  Focus: Vision AI · Active Learning · MLOps
  Say hi: bagdeabhishek.rahul@gmail.com
  `,
        'font-family: monospace; font-weight: bold; color: #C15F3C; background: #F0EEE6; padding: 10px; border: 1px solid #DBD7CB;'
    );
});

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
});

revealElements.forEach(el => revealObserver.observe(el));

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

function updateThemeIcons() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (sunIcon) sunIcon.style.display = isDark ? 'none' : 'block';
    if (moonIcon) moonIcon.style.display = isDark ? 'block' : 'none';
}

updateThemeIcons();

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons();
    });
}
