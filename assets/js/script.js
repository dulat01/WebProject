'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// add silder
 
let home = document.getElementById("home");
let data = ["DSC08550.jpg", "DSC08601.jpg", "DSC08628.jpg", "DSC08547.jpg"]
let i = 0;

function updateBackground() {

  // home.style.background = "black";
  // home.style.backgroundPosition= "center 100px";
  home.style.transition = "3s all";
  home.style.backgroundSize = "120% 120%";
  setTimeout(function() {
  home.style.background = `linear-gradient(rgba(243, 239, 234, 0.8), rgb(248, 168, 48) 0%, hsl(36, 93%, 58%) 50%) center center / 120% 120% no-repeat fixed, url(/gym_webSite/assets/images/${data[i]})`;
  home.style.backgroundAttachment= "fixed";
  home.style.backgroundRepeat= "no-repeat";
  home.style.backgroundPosition= "center";
  home.style.backgroundSize = "100% 100%";
  home.style.transition = "3s all" 
  home.style.opacity = 1; 
  i++;
  if ((data.length - 1) == i)
    i = 0;
  }, 1000);
}
updateBackground();
setInterval(updateBackground, 4000);

// make loader

let containerLoader = document.getElementById("containerLoader");
let body = document.getElementById("top")
containerLoader.style.display = "flex";
function removeLoader()
{
  containerLoader.style.transition = "0.5s all";
  // containerLoader.style.display = "block"
  containerLoader.style.opacity = 0;
  body.style.overflowY = "scroll"
}



window.addEventListener('load', function() {
  window.scrollTo(0, 0);
  setTimeout(function() {
    setTimeout(removeLoader, 2500);
  }, 1000);
  // window.scrollTo(0, 0);
});