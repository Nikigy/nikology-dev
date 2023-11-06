document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.hero-title').classList.add('fade-in');

    document.querySelector('.scroll-down-button').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
    });
});

window.addEventListener('scroll', function() {
    var buttonContainer = document.querySelector('.hero-banner');
    var websiteName = document.querySelector('.website-name');
    var scrollPosition = 50; // adjust this value as needed

    if (window.pageYOffset > scrollPosition) {
        buttonContainer.classList.add('hero-banner--scrolled');
        websiteName.classList.add('website-name--visible');
    } else {
        buttonContainer.classList.remove('hero-banner--scrolled');
        websiteName.classList.remove('website-name--visible');
    }
});

window.addEventListener('scroll', function() {
    var buttonContainer = document.querySelector('.hero-banner');
    var websiteName = document.querySelector('.website-name');
    var scrollPosition = 50; // adjust this value as needed

    if (window.pageYOffset > scrollPosition) {
        buttonContainer.classList.add('hero-banner--scrolled');
        websiteName.classList.add('website-name--visible');
    } else {
        buttonContainer.classList.remove('hero-banner--scrolled');
        websiteName.classList.remove('website-name--visible');
    }
});