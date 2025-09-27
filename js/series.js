
document.addEventListener('DOMContentLoaded', () => {
    const seasonHeaders = document.querySelectorAll('.season-header');

    seasonHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const season = header.parentElement;
            season.classList.toggle('active');

            const arrow = header.querySelector('.arrow');
            if (season.classList.contains('active')) {
                arrow.textContent = '▲';
            } else {
                arrow.textContent = '▼';
            }
        });
    });
});
