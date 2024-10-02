document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;

    function updateSlidePosition() {
        slider.style.transform = `translateX(-${index * 300}px)`; // Adjust this value to match the slide width
    }

    nextButton.addEventListener('click', () => {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePosition();
    });

    prevButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        updateSlidePosition();
    });

    updateSlidePosition();
});
