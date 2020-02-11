// Меню hamburger секция promo 

const hamburgerButton = document.querySelector(".hamburger__btn");
const hamburgerIcon = document.querySelector(".hamburger-menu-icon");
const hamburgerMenu = document.querySelector(".hamburger");
const promo = document.querySelector(".promo");
const body = document.querySelector("body")
const links = document.querySelectorAll('.hamburger-nav__link')

hamburgerButton.addEventListener("click", function () {
    hamburgerIcon.classList.toggle("hamburger-menu-icon--active")
    hamburgerMenu.classList.toggle("hamburger--active")
    promo.classList.toggle("promo-hamburger--active")
    body.classList.toggle("body-noscroll")
})


for (let elem of links) {
    elem.addEventListener('click', function () {
        body.classList.toggle("body-noscroll")
        promo.classList.toggle("promo-hamburger--active")
        hamburgerIcon.classList.remove('hamburger-menu-icon--active')
        hamburgerMenu.classList.toggle("hamburger--active")

    })
}