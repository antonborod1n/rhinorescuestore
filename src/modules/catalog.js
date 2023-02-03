document.addEventListener('DOMContentLoaded', () => {
    let catalogFilterBtn = document.querySelector('.catalog__filter-btn');
    let catalogFilterDropList = document.querySelector('.catalog__filter-drop-list');
    let catalogFilterSortBtn = document.querySelector('.catalog__filter-main-btn');
    let catalogFilterSort = document.querySelector('.catalog__filter-sort');
    let catalog = document.querySelector('.catalog__filter-item');

    document.addEventListener('click', function (e) {
        if (e.target == catalogFilterBtn) {
            catalogFilterDropList.classList.toggle('catalog__filter-drop-list--active');
        } else {
            catalogFilterDropList.classList.remove('catalog__filter-drop-list--active')
        }
    });

    catalogFilterSortBtn.addEventListener('click', function () {
        catalogFilterSort.classList.toggle('active-content');
    })

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_menu = target == catalogFilterSort || catalogFilterSort.contains(target);
        const its_btnMenu = target == catalogFilterSortBtn;
        const menu_is_active = catalogFilterSort.classList.contains("active-content");

        if (!its_menu && !its_btnMenu && menu_is_active) {
            catalogFilterSort.classList.toggle('active-content');
        };
    })
});
