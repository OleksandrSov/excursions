// slider excursions start
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  currentIndex = index;
  const translateValue = -index * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}

function showPrevSlide() {
  if (currentIndex > 0) {
	 showSlide(currentIndex - 1);
  } else {
	 showSlide(slider.children.length - 1);
  }
}

function showNextSlide() {
  if (currentIndex < slider.children.length - 1) {
	 showSlide(currentIndex + 1);
  } else {
	 showSlide(0);
  }
}

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);
// slider excursions end