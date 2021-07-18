$(document).ready(() => {

    //點擊icon顯示菜單
    $('.show_hamburgerMenu').click((e) => {
        e.preventDefault();
        $('.hamburgerMenu').toggleClass('hamburgerMenu-show');
    });

});