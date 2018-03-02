// Слайдер//

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonials__text");
  var dots = document.getElementsByClassName("dot");
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
}


//Выпадающее мобильное меню//

var hamburger = document.querySelector("#hamburger__link");
  
hamburger.addEventListener("click", function(event){
  event.preventDefault();
  var nav = document.querySelector("#navigation");
  nav.classList.add("navigation_active");
  
  var navItem = document.querySelector("#nav__item");
  navItem.classList.add("nav_item_active");
});