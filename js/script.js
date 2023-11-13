document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector('.hero-title');
    const scrollDownButton = document.querySelector('.scroll-down-button');
    const heroBanner = document.querySelector('.hero-banner');
    const websiteName = document.querySelector('.website-name');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const contentContainer = document.querySelector('.content-container');

    // Add fade-in class to hero title if it exists
    heroTitle?.classList.add('fade-in');

    // Smooth scrolling for the scroll-down button
    scrollDownButton?.addEventListener('click', (e) => {
        e.preventDefault();
        const contentTop = document.querySelector('#content').offsetTop;
        const bannerHeight = heroBanner.offsetHeight;
        window.scrollTo({ top: contentTop - bannerHeight, behavior: 'smooth' });
    });

    // Toggle classes based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = 50; // Adjust this value as needed
        if (window.pageYOffset > scrollPosition) {
            heroBanner?.classList.add('hero-banner--scrolled');
            websiteName?.classList.add('website-name--visible');
        } else {
            heroBanner?.classList.remove('hero-banner--scrolled');
            websiteName?.classList.remove('website-name--visible');
        }
    });

    // Modal functionality
    document.querySelectorAll('.image-container').forEach(item => {
        item.addEventListener('click', () => {
            const modalImage = modal.querySelector('.modal-image');
            const modalDescription = modal.querySelector('.modal-description');
            const imgSrc = item.querySelector('img').src;
            const descriptionHTML = item.querySelector('.image-description').innerHTML;

            modalImage.src = imgSrc;
            modalDescription.innerHTML = descriptionHTML;
            modal.style.display = 'block';
            contentContainer?.classList.add('blurred');
            document.body.classList.add('modal-open');
        });
    });

    // Close modal
    modalClose?.addEventListener('click', () => {
        modal.style.display = 'none';
        contentContainer?.classList.remove('blurred');
        document.body.classList.remove('modal-open');
    });
});