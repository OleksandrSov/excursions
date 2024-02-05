// review slider start-----------------------------
let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

const slides = document.querySelector('.slider').children;
const totalSlides = slides.length;

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    updateSlider();
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    updateSlider();
}

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
}

function handleTouchEnd() {
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
        nextSlide();
    } else if (touchDiff < -50) {
        prevSlide();
    }
}

function updateSlider() {
    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.slider').style.transform = 'translateX(' + newTransformValue + ')';
}

document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);
document.addEventListener('touchend', handleTouchEnd);
// review slider end