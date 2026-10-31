// steps slider

$('.services__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
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
            }
        },
    ]
});

// steps slider

$('.steps__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear',
    nextArrow: $('.steps .arrow-next'),
    prevArrow: $('.steps .arrow-prev'),
});

// rental slider

const rentalSlider = $('.rental__slider');

function initRentalSlider() {
    if ($(window).width() <= 768) {
        if (!rentalSlider.hasClass('slick-initialized')) {
            rentalSlider.slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                // adaptiveHeight: true,
                // variableWidth: true,
                // centerMode: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                        }
                    },
                ]
            });
        }
    } else {
        if (rentalSlider.hasClass('slick-initialized')) {
            rentalSlider.slick('unslick');
        }
    }
}

initRentalSlider();

// ship slider

$('.ship__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
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

// planes slider

$('.planes__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: $('.planes .arrow-next'),
    prevArrow: $('.planes .arrow-prev'),
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

// staff

$('.staff__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $('.staff .arrow-next'),
    prevArrow: $('.staff .arrow-prev'),
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
            }
        },
    ]
});

// popular

$('.popular__nav').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 5,
    // slidesToScroll: 1,
    centerMode: true,
    // ХАК: паддинг сдвигает трек ровно на 1 слайд (50px) вниз,
    // возвращая истинный центр на 3-ю строчку вместо 2-й.
    centerPadding: '50px',
    nextArrow: $('.popular .arrow-next'),
    prevArrow: $('.popular .arrow-prev'),
    infinite: true,
    speed: 300,
    asNavFor: '.popular__slider',
});

$('.popular__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.popular__nav',
});