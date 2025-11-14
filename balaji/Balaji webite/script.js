// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const hamburger = document.querySelector('.hamburger-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    const openMenu = () => { 
        if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active'); 
        if (mobileMenu) mobileMenu.classList.add('active'); 
    };
    
    const closeMenu = () => { 
        if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active'); 
        if (mobileMenu) mobileMenu.classList.remove('active'); 
    };
    
    if (hamburger) hamburger.addEventListener('click', openMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMenu);

    // Scroll Reveal Animation
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});