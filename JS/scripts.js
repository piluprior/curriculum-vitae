// script
window.addEventListener('DOMContentLoaded', event => {

    // activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// scroll-up
document.addEventListener('DOMContentLoaded', () => {
    const scrollUpButton = document.getElementById('scrollUp');
  
    // affiche le bouton si l'utilisateur a scrollé de 150px ou plus
    window.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            scrollUpButton.classList.add('show');
        } else {
        scrollUpButton.classList.remove('show');
        }
    });
  
    // action lors du clic sur le bouton
    scrollUpButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
        behavior: 'smooth' // scroll fluide
        });
    });
});