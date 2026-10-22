const servicesSlider = $('.services__slider');

servicesSlider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    // swipe: false,
    // touchMove: false,
    // draggable: false,
    // swipeToSlide: false,
    // fade: true,
    // cssEase: 'linear',
    nextArrow: $('.services .arrow-next'),
    prevArrow: $('.services .arrow-prev'),
    responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            centerMode: true,
            // centerPadding: '60px',
            }
        },
    ]
});

const stepsSlider = $('.steps__slider');

stepsSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    // swipe: false,
    // touchMove: false,
    // draggable: false,
    // swipeToSlide: false,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('.steps .arrow-next'),
    prevArrow: $('.steps .arrow-prev'),
});

const shipSlider = $('.ship__slider');

shipSlider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // swipe: false,
    // touchMove: false,
    // draggable: false,
    // swipeToSlide: false,
    nextArrow: $('.ship .arrow-next'),
    prevArrow: $('.ship .arrow-prev'),
     responsive: [
        {
            breakpoint: 1010,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});