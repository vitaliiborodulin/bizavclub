$(function() {

  // Проверяем, поддерживает ли устройство тач-скрин
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const header = document.querySelector(".header");
  const syncScrolledHeader = () => {
    // const isDesktop = window.matchMedia("(min-width: 769px)").matches;
    // header?.classList.toggle("header--scrolled", isDesktop && window.scrollY > 0 && !header.classList.contains("open"));
    header?.classList.toggle("header--scrolled", window.scrollY > 0 && !header.classList.contains("open"));
  };
  
  syncScrolledHeader();
  window.addEventListener("scroll", syncScrolledHeader, { passive: true });
  window.addEventListener("resize", syncScrolledHeader);
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
          $(this).children('.sub-menu').stop(true, true).fadeIn();
      }).mouseleave(function() {
          $(this).removeClass('active');
          $(this).children('.sub-menu').stop(true, true).fadeOut();
      });
  
  }
  $(".cal").flatpickr({
      mode: "range",
      minDate: "today",
      dateFormat: "d.m",
      // disableMobile: "true"
  });
  
  // form passengers
  
  $(document).on('click', '.plus', function () {
      const $input = $(this).siblings('input');
      $input.val(parseInt($input.val(), 10) + 1);
  });
  
  $(document).on('click', '.minus', function () {
      const $input = $(this).siblings('input');
  
      let value = parseInt($input.val(), 10);
  
      if (value > parseInt($input.attr('min'), 10)) {
          $input.val(value - 1);
      }
  });
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
  if (!isTouchDevice) {
  
      $('.trust__item').mouseenter(function() {
          $(this).find('.trust__descr').stop(true, true).slideDown(500);
      }).mouseleave(function() {
          $(this).find('.trust__descr').stop(true, true).slideUp(500);
      });
  }
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
  $('.popup-link').fancybox({
      // thumbs : { autoStart:true },
      toolbar: "auto",
      infobar: true,
      smallBtn: "auto",
      protect: true,
      loop: true,
      iframe : {
          preload : false
      },
      closeExisting : true
  });
  var arrowUpBtn = $('#scroll-button');
  
  function scrollBtn() {
  	var top = $(this).scrollTop();
  
  	if (top > 300) {
  		arrowUpBtn.fadeIn(500);
  	} else {
  		arrowUpBtn.fadeOut(500);
  	}
  }
  
  scrollBtn();
  
  $(window).on('scroll', scrollBtn);
  
  arrowUpBtn.click(function(e) {
      e.preventDefault();
  
      $('body, html').animate({
          scrollTop: 0
      }, 300)
  });

});