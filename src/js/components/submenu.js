if (isTouchDevice) {

    $('.navigation__menu .menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
    });

    var submenu =  $('.navigation__menu .sub-menu');
    var menuChildren = $(' .navigation__menu .menu-item-has-children');


    menuChildren.on('click', function() {
        
        if ($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).find('.sub-menu').removeClass('open').hide();
        } else {
                $(this).addClass('active');
                $(this).find('.sub-menu').addClass('open').show();
        }
    });



} else {

    $('.navigation__menu .menu-item-has-children').mouseenter(function() {
        $(this).addClass('active');
        $(this).children('.sub-menu').fadeIn();
    }).mouseleave(function() {
        $(this).removeClass('active');
        $(this).children('.sub-menu').fadeOut();
    });



}