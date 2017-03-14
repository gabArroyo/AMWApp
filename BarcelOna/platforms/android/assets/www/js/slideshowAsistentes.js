var slideIndex = 1;

/* Slider del ayuntamiento */

function resetSlideTimeout(){
  window.clearTimeout(timeoutHandle);
}

function plusSlides(n) {
  resetSlideTimeout();
  showSlides(slideIndex += n);
}

function increaseSlides() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  resetSlideTimeout();
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slidesAsistentes");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  timeoutHandle = setTimeout(increaseSlides, 6000);
}
