import "./scss/main.scss";
import "./scss/itc-slider.css";
import "./modules/itc-slider";

let bestSalesBtn = document.querySelectorAll('.best-sales__btn');
let bestSalesProductItem = document.querySelectorAll('.best-sales__product-item');
let headerInner = document.querySelector('.header__inner')
let logoLink = document.querySelector('.logo__link')
let menuLink = document.querySelectorAll('.menu__link')
let userNavLink = document.querySelectorAll('.user-nav__link')

console.log(userNavLink)

bestSalesBtn.forEach(item => item.addEventListener('click', addActivelass));

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