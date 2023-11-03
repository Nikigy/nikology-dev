window.addEventListener('scroll', function() {
    var buttonContainer = document.querySelector('.button-container');
    var websiteName = document.querySelector('.website-name');
    var scrollPosition = 50; // adjust this value as needed

    if (window.pageYOffset > scrollPosition) {
        buttonContainer.classList.add('scrolled');
        websiteName.classList.add('visible');
    } else {
        buttonContainer.classList.remove('scrolled');
        websiteName.classList.remove('visible');
    }
});