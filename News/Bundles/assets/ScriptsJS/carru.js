let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}


// carusel 2
let slidePosition1 = 0;
const slides1 = document.getElementsByClassName('carousel__item1');
const totalSlides1 = slides1.length;

document.
  getElementById('carousel__button--next1')
  .addEventListener("click", function() {
    moveToNextSlide1();
  });
document.
  getElementById('carousel__button--prev1')
  .addEventListener("click", function() {
    moveToPrevSlide1();
  });

function updateSlidePosition1() {
  for (let slide1 of slides1) {
    slide1.classList.remove('carousel__item--visible1');
    slide1.classList.add('carousel__item--hidden1');
  }

  slides1[slidePosition1].classList.add('carousel__item--visible1');
}

function moveToNextSlide1() {
  if (slidePosition1 === totalSlides1 - 1) {
    slidePosition1 = 0;
  } else {
    slidePosition1++;
  }

  updateSlidePosition1();
}

function moveToPrevSlide1() {
  if (slidePosition1 === 0) {
    slidePosition1 = totalSlides1 - 1;
  } else {
    slidePosition1--;
  }

  updateSlidePosition1();
}