// Меню hamburger секция promo 

const hamburgerButton = document.querySelector(".hamburger__btn");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerMenu = document.querySelector(".hamburger");
const promo = document.querySelector(".promo");
const body = document.querySelector("body")

hamburgerButton.addEventListener("click", function () {
    hamburgerIcon.classList.toggle("hamburger-menu-icon--active")
    hamburgerMenu.classList.toggle("hamburger--active")
    promo.classList.toggle("promo-hamburger--active")
    body.classList.toggle("body-noscroll")
})


//