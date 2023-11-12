document.addEventListener("DOMContentLoaded", function() {
    let heroTitle = document.querySelector('.hero-title');
    let scrollDownButton = document.querySelector('.scroll-down-button');
    let buttonContainer = document.querySelector('.hero-banner');
    let websiteName = document.querySelector('.website-name');
    let modalClose = document.querySelector('.modal-close');
    let modal = document.querySelector('.modal');
    let contentContainer = document.querySelector('.content-container');

    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }

    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', function(e) {
            e.preventDefault();
            let contentTop = document.querySelector('#content').offsetTop;
            let bannerHeight = document.querySelector('.hero-banner').offsetHeight;
            window.scrollTo({ top: contentTop - bannerHeight, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', function() {
        let scrollPosition = 50; // adjust this value as needed

        if (window.pageYOffset > scrollPosition) {
            if (buttonContainer) buttonContainer.classList.add('hero-banner--scrolled');
            if (websiteName) websiteName.classList.add('website-name--visible');
        } else {
            if (buttonContainer) buttonContainer.classList.remove('hero-banner--scrolled');
            if (websiteName) websiteName.classList.remove('website-name--visible');
        }
    });

    document.querySelectorAll('.image-container').forEach(item => {
        item.addEventListener('click', function() {
            let modalImage = document.querySelector('.modal-image');
            let modalDescription = document.querySelector('.modal-description');

            if (modal && modalImage && modalDescription) {
                modal.style.display = 'block';
                modalImage.src = this.querySelector('img').src;
                modalDescription.innerHTML = this.querySelector('.image-description').innerHTML;
                if (contentContainer) contentContainer.classList.add('blurred');
            }

            document.body.classList.add('modal-open');
        });
    });

    if (modalClose && modal) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            if (contentContainer) contentContainer.classList.remove('blurred');
            document.body.classList.remove('modal-open');
        });
    }
});