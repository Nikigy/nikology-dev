document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.hero-title').classList.add('fade-in');
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