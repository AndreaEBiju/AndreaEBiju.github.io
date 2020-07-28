const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.querySelector(".navbar ul");
const navbarLinks = document.querySelectorAll(".navbar a");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}

// navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick);
}

function navbarLinkClick(event) {

  smoothScroll(event); // Call the "smoothScroll" function

  if(navbarMenu.classList.contains("open")) { // Close navbarMenu in smaller screens
    navbarToggler.click();
  }

}

// Smooth-Scrolling
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // window.scrollTo(0, distance*(progress/duration) + startPosition);
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

// Easing Functions

function linear(t, b, c, d) {
	return c*t/d + b;
};

function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

/*const features = document.querySelectorAll(".feature");
const options = document.querySelectorAll(".options");
for(let i=0; i<features.length;i++){
  features[i].addEventListener("click", function(){
  options[i].classList.toggle = "hidden";
});
}*/

/*var x1 = document.getElementById("voice_based_assistance");
var x2= document.getElementById("gesture_based_navigation");
var x3 = document.getElementById("captions_and_hyperlinks");
var x4 = document.getElementById("text_to_braille");
var x5 = document.getElementById("ease_of_access");
var x6 = document.getElementById("appearance_settings");*/
var x = document.getElementsByClassName("options");

function display1(){
  if(x[0].style.display == "none"){
    x[0].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==0){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[0].style.display="none";
  }
}
function display2(){
  if(x[1].style.display == "none"){
    x[1].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==1){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[1].style.display="none";
  }
}
function display3(){
  if(x[2].style.display == "none"){
    x[2].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==2){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[2].style.display="none";
  }
}
function display4(){
  if(x[3].style.display == "none"){
    x[3].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==3){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[3].style.display="none";
  }
}
function display5(){
  if(x[4].style.display == "none"){
    x[4].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==4){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[4].style.display="none";
  }
}
function display6(){
  if(x[5].style.display == "none"){
    x[5].style.display="block";
    for(let i=0; i<x.length; i++){
      if(i==5){
        continue;
      }else{
        x[i].style.display = "none";
      }
    }
  }else{
    x[5].style.display="none";
  }
}

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
