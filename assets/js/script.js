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

// Ensure navbar buttons are always clickable
header.style.zIndex = 1002;


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
  body.style.overflowY = "scroll";
  header.style.opacity = 1; // Show header
}



window.addEventListener('load', function() {
  window.scrollTo(0, 0);
  setTimeout(function() {
    setTimeout(removeLoader, 2500);
  }, 1000);
  // window.scrollTo(0, 0);
});

// Modal form functionality
const modal = document.querySelector(".user-modal");
const signupButtons = document.querySelectorAll(".signup-btn");
const closeModalButton = document.querySelector(".close-modal");

signupButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.classList.add("is-visible");
  });
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("is-visible");
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("is-visible");
  }
});

// Populate course dropdown
const courseDropdown = document.getElementById("signup-course");
const courses = ["Поднятие тяжестей", "Кардиотренировка", "Йога", "Фитнес-пакет"];

courses.forEach(course => {
  const option = document.createElement("option");
  option.value = course;
  option.textContent = course;
  courseDropdown.appendChild(option);
});

// Enable smooth horizontal scrolling for course list
const classList = document.querySelector(".class-list");
let isScrolling = false;

classList.addEventListener("wheel", (event) => {
  if (event.deltaY !== 0) {
    event.preventDefault();
    if (!isScrolling) {
      isScrolling = true;
      classList.scrollBy({
        left: event.deltaY,
        behavior: 'smooth'
      });
      setTimeout(() => {
        isScrolling = false;
      }, 300); // Adjust the timeout duration as needed
    }
  }
});

// Modal for blog article functionality
const blogModal = document.querySelector(".blog-modal");
const closeBlogModalButton = document.querySelector(".close-blog-modal");
const blogLinks = document.querySelectorAll(".btn-link");

blogLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const blogCard = link.closest(".blog-card");
    const blogTitle = blogCard.querySelector(".card-title").textContent;
    const blogImageSrc = blogCard.querySelector(".card-banner img").src;

    let blogText;
    if (blogTitle === "Иду в спортзал в первый раз") {
      blogText = `
        <p>Собираетесь в спортзал в первый раз? Не беспокойтесь! Наше краткое руководство поможет вам с легкостью сориентироваться в вашем дебюте.</p>
        <p>Первое, что вам нужно сделать, это выбрать подходящую одежду и обувь. Убедитесь, что ваша одежда удобная и позволяет вам свободно двигаться. Обувь должна быть подходящей для занятий спортом, чтобы избежать травм.</p>
        <p>Когда вы придете в спортзал, не стесняйтесь попросить помощи у тренера. Они помогут вам настроить оборудование и покажут, как правильно выполнять упражнения. Не бойтесь задавать вопросы и уточнять, если что-то непонятно.</p>
        <p>Начните с разминки. Это поможет подготовить ваше тело к тренировке и снизить риск травм. Разминка может включать легкий бег, прыжки на месте или растяжку.</p>
        <p>После разминки переходите к основным упражнениям. Начните с легких весов и постепенно увеличивайте нагрузку. Не забывайте следить за техникой выполнения упражнений. Это поможет избежать травм и достичь лучших результатов.</p>
        <p>Не забывайте про отдых. Между подходами делайте небольшие перерывы, чтобы восстановить силы. Пейте воду, чтобы поддерживать водный баланс в организме.</p>
        <p>После тренировки обязательно сделайте заминку. Это поможет вашему телу постепенно остыть и снизить риск мышечных болей. Заминка может включать легкую растяжку или прогулку.</p>
        <p>И самое главное, не забывайте наслаждаться процессом. Тренировки должны приносить удовольствие и помогать вам достигать ваших целей. Удачи!</p>
      `;
    } else if (blogTitle === "Руководство по первому посещению тренажерного зала") {
      blogText = `
        <p>Начинаете свой фитнес-путь? Вот ваше основное руководство по посещению тренажерного зала для успешного дебюта.</p>
        <p>Первое, что вам нужно сделать, это выбрать подходящую одежду и обувь. Убедитесь, что ваша одежда удобная и позволяет вам свободно двигаться. Обувь должна быть подходящей для занятий спортом, чтобы избежать травм.</p>
        <p>Когда вы придете в спортзал, не стесняйтесь попросить помощи у тренера. Они помогут вам настроить оборудование и покажут, как правильно выполнять упражнения. Не бойтесь задавать вопросы и уточнять, если что-то непонятно.</p>
        <p>Начните с разминки. Это поможет подготовить ваше тело к тренировке и снизить риск травм. Разминка может включать легкий бег, прыжки на месте или растяжку.</p>
        <p>После разминки переходите к основным упражнениям. Начните с легких весов и постепенно увеличивайте нагрузку. Не забывайте следить за техникой выполнения упражнений. Это поможет избежать травм и достичь лучших результатов.</p>
        <p>Не забывайте про отдых. Между подходами делайте небольшие перерывы, чтобы восстановить силы. Пейте воду, чтобы поддерживать водный баланс в организме.</p>
        <p>После тренировки обязательно сделайте заминку. Это поможет вашему телу постепенно остыть и снизить риск мышечных болей. Заминка может включать легкую растяжку или прогулку.</p>
        <p>И самое главное, не забывайте наслаждаться процессом. Тренировки должны приносить удовольствие и помогать вам достигать ваших целей. Удачи!</p>
      `;
    } else if (blogTitle === "Приключение в тренажерном зале для новичков") {
      blogText = `
        <p>Смело приступайте к занятиям фитнесом! Вот план вашего первого посещения тренажерного зала.</p>
        <p>Первое, что вам нужно сделать, это выбрать подходящую одежду и обувь. Убедитесь, что ваша одежда удобная и позволяет вам свободно двигаться. Обувь должна быть подходящей для занятий спортом, чтобы избежать травм.</p>
        <p>Когда вы придете в спортзал, не стесняйтесь попросить помощи у тренера. Они помогут вам настроить оборудование и покажут, как правильно выполнять упражнения. Не бойтесь задавать вопросы и уточнять, если что-то непонятно.</p>
        <p>Начните с разминки. Это поможет подготовить ваше тело к тренировке и снизить риск травм. Разминка может включать легкий бег, прыжки на месте или растяжку.</p>
        <p>После разминки переходите к основным упражнениям. Начните с легких весов и постепенно увеличивайте нагрузку. Не забывайте следить за техникой выполнения упражнений. Это поможет избежать травм и достичь лучших результатов.</p>
        <p>Не забывайте про отдых. Между подходами делайте небольшие перерывы, чтобы восстановить силы. Пейте воду, чтобы поддерживать водный баланс в организме.</p>
        <p>После тренировки обязательно сделайте заминку. Это поможет вашему телу постепенно остыть и снизить риск мышечных болей. Заминка может включать легкую растяжку или прогулку.</p>
        <p>И самое главное, не забывайте наслаждаться процессом. Тренировки должны приносить удовольствие и помогать вам достигать ваших целей. Удачи!</p>
      `;
    }

    document.querySelector(".blog-title").textContent = blogTitle;
    document.querySelector(".blog-text").innerHTML = blogText;
    document.querySelector(".blog-image").src = blogImageSrc;

    blogModal.classList.add("is-visible");
  });
});

closeBlogModalButton.addEventListener("click", () => {
  blogModal.classList.remove("is-visible");
});

// Close blog modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === blogModal) {
    blogModal.classList.remove("is-visible");
  }
});

// Like button functionality
const likeButton = document.querySelector(".like-button");

likeButton.addEventListener("click", () => {
  alert("Спасибо за ваш лайк!");
});