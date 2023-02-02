import $ from "jquery";
import "ion-rangeslider";
import 'slick-carousel';

$(function () {
    $(".form__filter-input").ionRangeSlider();

    $('.goods-content__slide-thumb').slick({
        asNavFor: '.goods-content__slide-big',
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });

    $('.goods-content__slide-big').slick({
        asNavFor: '.goods-content__slide-thumb',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });
});

document.addEventListener('DOMContentLoaded', () => {
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
    let bestSalesInner = document.querySelector('.best-sales__inner');
    let bestSalesBtn = document.querySelectorAll('.app-best-sales__btn');
    let bestSalesProductItem = document.querySelectorAll('.best-sales__product-item');
    let closebestSalesProductItem = document.querySelectorAll('.best-sales__product-item-close');

    headerInner.addEventListener('mouseover', function (e) {
        console.log(e.target)
    });

    //btn
    bestSalesBtn.forEach(item => item.addEventListener('click', function () {
        let product = this.nextElementSibling;
        product.classList.toggle('best-sales__product-item--active')
    }));

    closebestSalesProductItem.forEach(item => item.addEventListener('click', function (e) {
        let product = this.parentNode;
        product.classList.remove('best-sales__product-item--active');
    }))

    //menu
    kitsLink.addEventListener('click', function () {
        dropMenuKits.classList.toggle('drop__menu-kits--active');
        dropMenuPack.classList.remove('drop__menu-pack--active');
        dropMenuTraining.classList.remove('drop__menu-list--active');
        dropMenuAbout.classList.remove('drop__menu-list--active');
    });

    packLink.addEventListener('click', function () {
        dropMenuPack.classList.toggle('drop__menu-pack--active');
        dropMenuKits.classList.remove('drop__menu-kits--active');
        dropMenuTraining.classList.remove('drop__menu-list--active');
        dropMenuAbout.classList.remove('drop__menu-list--active');
    });

    trainingLink.addEventListener('click', function () {
        dropMenuTraining.classList.toggle('drop__menu-list--active');
        dropMenuPack.classList.remove('drop__menu-pack--active');
        dropMenuKits.classList.remove('drop__menu-kits--active');
        dropMenuAbout.classList.remove('drop__menu-list--active');
    });

    aboutLink.addEventListener('click', function () {
        dropMenuAbout.classList.toggle('drop__menu-list--active');
        dropMenuPack.classList.remove('drop__menu-pack--active');
        dropMenuKits.classList.remove('drop__menu-kits--active');
        dropMenuTraining.classList.remove('drop__menu-list--active');
    });

    //header
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
    const menuCloseBtn = document.querySelector('.nav__close');

    menuOpenBtn.addEventListener('click', function () {
        menuList.classList.add('menu__list--active');
        menuCloseBtn.classList.add('nav__close--active');
        document.body.style.overflow = 'hidden';
    });

    menuCloseBtn.addEventListener('click', function () {
        menuList.classList.remove('menu__list--active');
        this.classList.remove('nav__close--active');
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
    accordeon('.catalog__filter-main-btn');
});