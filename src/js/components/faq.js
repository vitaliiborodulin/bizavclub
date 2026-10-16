// $('.faq__item:first-child').find('.faq__header').addClass('active');
// $('.faq__item:first-child').find('.faq__body').show();

$('.faq__header').on('click', function () {
    const faqBody = $(this).next();

    if (!$(this).hasClass('active')){
        $('.faq__header').removeClass('active');
        $('.faq__body').slideUp(300);
        $(this).addClass('active');
        faqBody.slideDown(300);
    } else {
        $(this).removeClass('active');
        faqBody.slideUp(300);
    }
});