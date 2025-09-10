document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const seriesLogos = document.querySelectorAll('.series-logos img');
    const seriesInfoItems = document.querySelectorAll('.series-info-item');
    const selectionMessage = document.getElementById('selection-message');

    function showSeriesInfo(series) {
        if (selectionMessage) {
            selectionMessage.style.display = 'none';
        }

        seriesInfoItems.forEach(item => {
            if (item.dataset.series === series) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Ocultar todas las series al principio
    seriesInfoItems.forEach(item => {
        item.style.display = 'none';
    });

    seriesLogos.forEach(logo => {
        logo.addEventListener('click', () => {
            const series = logo.dataset.series;
            showSeriesInfo(series);
        });
    });

    const seasonHeaders = document.querySelectorAll('.season-header');

    seasonHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const season = header.parentElement;
            season.classList.toggle('active');
        });
    });
});