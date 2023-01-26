import "./scss/main.scss";
import "./scss/itc-slider.css";
import "./modules/itc-slider";

document.addEventListener('DOMContentLoaded', () => {
    let bestSalesBtn = document.querySelectorAll('.best-sales__btn');
    let bestSalesProductItem = document.querySelectorAll('.best-sales__product-item');
    let headerInner = document.querySelector('.header__inner')
    let logoLink = document.querySelector('.logo__link')
    let menuLink = document.querySelectorAll('.menu__link')
    let userNavLink = document.querySelectorAll('.user-nav__link')
    let kitsLink = document.querySelector('.menu__link-kits');
    let packLink = document.querySelector('.menu__link-pack');
    let dropMenuKits = document.querySelector('.drop__menu-kits');
    let dropMenuPack = document.querySelector('.drop__menu-pack');
    let dropMenuTraining = document.querySelector('.drop__menu-list-training');
    let dropMenuAbout = document.querySelector('.drop__menu-list-about');
    let trainingLink = document.querySelector('.menu__link-training');
    let aboutLink = document.querySelector('.menu__link-about');

    bestSalesBtn.forEach(item => item.addEventListener('click', addActivelass));

    kitsLink.addEventListener('mouseover', function () {
        dropMenuKits.classList.toggle('drop__menu-kits--active')
        dropMenuPack.classList.remove('drop__menu-pack--active')
    })

    packLink.addEventListener('mouseover', function () {
        dropMenuPack.classList.toggle('drop__menu-pack--active')
        dropMenuKits.classList.remove('drop__menu-kits--active')
    })

    trainingLink.addEventListener('mouseover', function () {
        dropMenuTraining.classList.toggle('drop__menu-list--active');
    })

    aboutLink.addEventListener('mouseover', function () {
        dropMenuAbout.classList.toggle('drop__menu-list--active');
    })

    function addActivelass() {
        bestSalesProductItem.forEach(item => item.classList.toggle('best-sales__product-item--active'));
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 1) {
            headerInner.classList.add('header__inner--active');
            logoLink.classList.remove('logo__link');
            logoLink.classList.add('logo__link--active');
            menuLink.forEach(item => {
                item.classList.add('menu__link--active');
            })
            userNavLink.forEach(item => {
                item.classList.add('user-nav__link--active');
            })
        } else if (window.scrollY < 1) {
            headerInner.classList.remove('header__inner--active');
            logoLink.classList.add('logo__link');
            logoLink.classList.remove('logo__link--active');
            menuLink.forEach(item => {
                item.classList.remove('menu__link--active');
            })
            userNavLink.forEach(item => {
                item.classList.remove('user-nav__link--active');
            })
        }
    });

    //mobile-menu
    const menuOpenBtn = document.querySelector('.menu__burger');
    const menuList = document.querySelector('.menu__list');
    const menucloseBtn = document.querySelector('.nav__close');

    menuOpenBtn.addEventListener('click', function () {
        menuList.classList.add('menu__list--active');
        document.body.style.overflow = 'hidden';
    });

    menucloseBtn.addEventListener('click', function () {
        menuList.classList.remove('menu__list--active');
        document.body.style.overflow = '';
    });

    //accordion
    function accordeon(triggersSelector) {
        const btns = document.querySelectorAll(triggersSelector);

        btns.forEach(item => {
            item.addEventListener('click', function () {
                this.classList.toggle('active-style');
                this.nextElementSibling.classList.toggle('active-content');

                if (this.classList.contains('active-style')) {
                    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
                } else {
                    this.nextElementSibling.style.maxHeight = '0px';
                }
            });
        });
    }

    accordeon('.footer__title');


















})

