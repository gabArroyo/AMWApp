var slideIndex = 1;
var slideIndexMasRecomendadas = 1;

showSlides(slideIndex);
showSlidesMasRecomendadas(slideIndexMasRecomendadas);

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
  var slides = document.getElementsByClassName("slidesAyuntamiento");
  var dots = document.getElementsByClassName("dotAyuntamiento");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timeoutHandle = setTimeout(increaseSlides, 6000);
}

/* Slider apps más descargadas */

function resetSlideTimeoutMasRecomendadas(){
  window.clearTimeout(timeoutHandleMasRecomendadas);
}

function plusSlidesMasRecomendadas(n) {
  resetSlideTimeoutMasRecomendadas();
  showSlidesMasRecomendadas(slideIndexMasRecomendadas += n);
}

function increaseSlidesMasRecomendadas() {
  showSlidesMasRecomendadas(slideIndexMasRecomendadas += 1);
}

function currentSlideMasRecomendadas(n) {
  resetSlideTimeoutMasRecomendadas();
  showSlidesMasRecomendadas(slideIndexMasRecomendadas = n);
}

function showSlidesMasRecomendadas(n) {
  var i;
  var slides = document.getElementsByClassName("slidesMasRecomendadas");
  var dots = document.getElementsByClassName("dotMasRecomendadas");
  if (n > slides.length) {slideIndexMasRecomendadas = 1}
  if (n < 1) {slideIndexMasRecomendadas = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexMasRecomendadas-1].style.display = "block";
  dots[slideIndexMasRecomendadas-1].className += " active";
  timeoutHandleMasRecomendadas = setTimeout(increaseSlidesMasRecomendadas, 6000);
}
