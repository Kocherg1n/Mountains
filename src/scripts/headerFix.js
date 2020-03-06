window.onscroll = function fixedHeader() {
    let header = document.querySelector('.header');
    let links = document.querySelectorAll('.nav__link');

    if (window.pageYOffset > 100) {
        header.classList.add('header__fixed');

        links.forEach((e) => {
            e.classList.add('nav__link--fixed');
        });

    } else {
        header.classList.remove('header__fixed');
        links.forEach((e) => {
            e.classList.remove('nav__link--fixed');
        });
    }

    // =========== header__fixed--scroll (nav__item light)

    if (window.pageYOffset > 100 && window.pageYOffset < 500) {
        links[0].classList.add('active');
    } else {
        links[0].classList.remove('active');
    }
    if (window.pageYOffset > 501 && window.pageYOffset < 1100) {
        links[1].classList.add('active');
    } else {
        links[1].classList.remove('active');
    }
    if (window.pageYOffset > 1101 && window.pageYOffset < 2000) {
        links[2].classList.add('active');
    } else {
        links[2].classList.remove('active');
    }
    if (window.pageYOffset > 2001 && window.pageYOffset < 2800) {
        links[3].classList.add('active');
    } else {
        links[3].classList.remove('active');
    }
    if (window.pageYOffset > 2801 && window.pageYOffset < 3500) {
        links[4].classList.add('active');
    } else {
        links[4].classList.remove('active');
    }
    if (window.pageYOffset > 3501 && window.pageYOffset < 4500) {
        links[5].classList.add('active');
    } else {
        links[5].classList.remove('active');
    }
};