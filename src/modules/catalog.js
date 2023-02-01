document.addEventListener('DOMContentLoaded', () => {
    let catalogFilterBtn = document.querySelector('.catalog__filter-btn');
    let catalogFilterDropList = document.querySelector('.catalog__filter-drop-list');

    catalogFilterBtn.addEventListener('click', function () {
        catalogFilterDropList.classList.toggle('catalog__filter-drop-list--active');
    });


});





