document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');
    const images = [
        'images/Galery/Ben10im1.webp',
        'images/Galery/Ben10im2.webp',
        'images/Galery/Ben10Im3.webp',
        'images/Galery/Ben10Im4.webp',
        'images/Galery/Ben10Im5.webp',
        'images/Galery/Ben10Im6.webp',
        'images/Galery/Ben10Im7.webp',
        'images/Galery/Ben10im8.webp',
        'images/Galery/Ben10im9.webp',
        'images/Galery/Ben10im10.webp',
        'images/Galery/Ben10im11.webp',
        'images/Galery/Ben10im12.webp'
    ];

    let galleryImages = '';
    images.forEach((image, index) => {
        galleryImages += `<img src='${image}' alt='Ben 10 Image' data-index='${index}'>`;
    });

    galleryContainer.innerHTML = `
        <div class='gallery'>
            ${galleryImages}
        </div>
    `;

    // Create and append modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    const modalContent = document.createElement('img');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    modal.appendChild(closeBtn);

    const prevBtn = document.createElement('a');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = '&#10094;';
    modal.appendChild(prevBtn);

    const nextBtn = document.createElement('a');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '&#10095;';
    modal.appendChild(nextBtn);

    let currentIndex;

    // Event listeners
    galleryContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            currentIndex = parseInt(e.target.dataset.index);
            modal.style.display = 'block';
            modalContent.src = e.target.src;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        modalContent.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        modalContent.src = images[currentIndex];
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});