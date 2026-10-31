const burger = $('.burger');
const menu = $('.header');


burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('close');
    menu.toggleClass('open');
    $('html, body').toggleClass('overflow');
    // syncScrolledHeader();
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        burger.removeClass('close');
        $('html, body').removeClass('overflow');
        // syncScrolledHeader();
    }
});

if ($(window).width() <= 768) {

    $('body').on('click', '.navigation__menu a', function(e) {
        burger.toggleClass('close');
        menu.toggleClass('open');
        $('html, body').removeClass('overflow');
        // syncScrolledHeader();
    });

}