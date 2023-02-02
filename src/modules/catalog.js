document.addEventListener('DOMContentLoaded', () => {
    let catalogFilterBtn = document.querySelector('.catalog__filter-btn');
    let catalogFilterDropList = document.querySelector('.catalog__filter-drop-list');
    let catalogFilterSortBtn = document.querySelector('.catalog__filter-main-btn');
    let catalogFilterSort = document.querySelector('.catalog__filter-sort');

    document.addEventListener('click', function (e) {
        if (e.target == catalogFilterBtn) {
            catalogFilterDropList.classList.toggle('catalog__filter-drop-list--active');
        } else {
            catalogFilterDropList.classList.remove('catalog__filter-drop-list--active')
        }
    });

    catalogFilterSortBtn.addEventListener('click', function (e) {
        catalogFilterSort.classList.toggle('active-content');
    })
});
