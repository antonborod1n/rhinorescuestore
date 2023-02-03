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
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../images/icons/arrow-arrows-back.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../images/icons/arrow-arrows-forward.svg" alt="arrow"></button>',
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let headerInner = document.querySelector('.header__inner')
    let logoLink = document.querySelector('.logo__link')
    let menuLink = document.querySelectorAll('.menu__link')
    let userNavLink = document.querySelectorAll('.user-nav__link')

    let dropMenu = document.querySelectorAll('.drop__menu')

    let dropMenuKits = document.querySelector('.drop__menu-kits');
    let dropMenuPack = document.querySelector('.drop__menu-pack');
    let dropMenuTraining = document.querySelector('.drop__menu-list-training');
    let dropMenuAbout = document.querySelector('.drop__menu-list-about');

    let dropMenuListKits = document.querySelector('.drop__menu-list-kits')
    let dropMenuListPack = document.querySelector('.drop__menu-list-pack')

    let menuLinkKits = document.querySelector('.menu__link-kits')
    let menuLinkPack = document.querySelector('.menu__link-pack')
    let menuLinkabout = document.querySelector('.menu__link-about')
    let menuLinkTraining = document.querySelector('.menu__link-training')

    let trainingLink = document.querySelector('.menu__link-training');
    let aboutLink = document.querySelector('.menu__link-about');
    let bestSalesInner = document.querySelector('.best-sales__inner');
    let bestSalesBtn = document.querySelectorAll('.app-best-sales__btn');
    let bestSalesProductItem = document.querySelectorAll('.best-sales__product-item');
    let closebestSalesProductItem = document.querySelectorAll('.best-sales__product-item-close');

    headerInner.addEventListener('mouseover', function (e) {
        let target = e.target;
        let current = e.currentTarget;

        if (target.classList.contains('menu__link-kits')) {
            closeMenu();
            dropMenuPack.classList.remove('menu--active');
            dropMenuKits.classList.toggle('menu--active');
        }
        if (target.classList.contains('menu__link-pack')) {
            closeMenu();
            dropMenuKits.classList.remove('menu--active');
            dropMenuPack.classList.toggle('menu--active');
        }
        /* if (target.classList.contains('menu__link-training')) {
            closeMenu();
            dropMenuTraining.classList.add('drop__menu-list--active')
        }
        if (target.classList.contains('menu__link-about')) {
            closeMenu();
            dropMenuAbout.classList.add('drop__menu-list--active')
        } */
    });

    menuLinkKits.addEventListener('click', function () {
        dropMenuListKits.classList.toggle('drop__menu-list--active');
    })

    menuLinkabout.addEventListener('click', function () {
        dropMenuAbout.classList.toggle('drop__menu-list--active');
    })

    menuLinkTraining.addEventListener('click', function () {
        dropMenuTraining.classList.toggle('drop__menu-list--active');
    })

    function closeMenu() {
        /* dropMenu.forEach(item => item.classList.remove('menu--active',)); */
        /* dropMenu.forEach(item => item.classList.remove('drop__menu-list--active')); */
    }

    //search
    const serchLink = document.querySelector('.user-nav__link-search');
    const serchPopup = document.querySelector('.serch-popup');
    const serchClose = document.querySelector('.serch-popup-close');

    serchLink.addEventListener('click', function (e) {
        e.preventDefault();
        serchPopup.classList.add('serch-popup--active');
    })

    serchClose.addEventListener('click', function (e) {
        serchPopup.classList.remove('serch-popup--active');
    })

    //btn
    bestSalesBtn.forEach(item => item.addEventListener('click', function () {
        let product = this.nextElementSibling;
        product.classList.toggle('best-sales__product-item--active')
    }));

    closebestSalesProductItem.forEach(item => item.addEventListener('click', function (e) {
        let product = this.parentNode;
        product.classList.remove('best-sales__product-item--active');
    }))

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

    //rating
    let ratingList = document.querySelectorAll('.rating__item');
    let ratingArray = Array.prototype.slice.call(ratingList);

    ratingArray.forEach(item => {
        item.addEventListener('click', () => {
            const { itemValue } = item.dataset;
            item.parentNode.dataset.totalValue = item.dataset.itemValue;
        });
    });
});