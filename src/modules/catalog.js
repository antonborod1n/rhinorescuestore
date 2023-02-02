document.addEventListener('DOMContentLoaded', () => {
    let catalogFilterBtn = document.querySelector('.catalog__filter-btn');
    let catalogFilterDropList = document.querySelector('.catalog__filter-drop-list');

    document.addEventListener('click', function (e) {
        if (e.target == catalogFilterBtn) {
            catalogFilterDropList.classList.toggle('catalog__filter-drop-list--active');
        } else {
            console.log(e.target)
            catalogFilterDropList.classList.remove('catalog__filter-drop-list--active')
        }
    });
});
