function switchTab(element) {
    // Управляем кнопками
    // $('.tab__btn').removeClass('active');
    $(element).siblings().removeClass('active');
    $(element).addClass('active');

    // Управляем контентом
    let targetTab = $(element).data('tab');
    // $('.tab__item').removeClass('active');
    $('#' + targetTab).siblings().removeClass('active');
    $('#' + targetTab).addClass('active');
}



if (isTouchDevice) {
    // На смартфонах и планшетах — переключаем по клику
    $('.tab__btn').on('click', function() {
        switchTab(this);
    });
} else {
    // На десктопах — переключаем по наведению (hover)
    $('.tab__btn').on('mouseenter', function() {
        switchTab(this);
    });
    
    // Опционально: отменяем стандартный клик на десктопе, 
    // чтобы при нажатии на кнопку ничего не происходило
    $('.tab__btn').on('click', function(e) {
      e.preventDefault();
    });
}
