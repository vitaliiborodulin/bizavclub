if (!isTouchDevice) {

    $('.trust__item').mouseenter(function() {
        $(this).find('.trust__descr').stop(true, true).slideDown(500);
    }).mouseleave(function() {
        $(this).find('.trust__descr').stop(true, true).slideUp(500);
    });
}