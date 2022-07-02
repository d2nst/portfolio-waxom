// swiper (이미지 슬라이더)

var swiper = new Swiper('.mySwiper', {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// mixitup (latest_projects 효과 적용)
var mixer = mixitup('.project_list', {
  animation: {
    duration: 600,
    easing: 'ease-in-out',
  },
});

// bxslider (중간 슬라이더 )

$(document).ready(function () {
  $('.posts_list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 370,
    slideMargin: 30,
    pager: false,
    auto: true,
    autoHover: true,
    speed: 2000,
    pause: 3000,
    nextSelector: '.controls .next',
    prevSelector: '.controls .prev',
  });
});

// countup

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  $('.counter').each(function (index, element) {
    var count = $(this),
      zero = {
        val: 0,
      },
      num = count.data('number'),
      split = (num + '').split('.'), // to cover for instances of decimals
      decimals = split.length > 1 ? split[1].length : 0;

    gsap.to(zero, {
      val: num,
      duration: 3,
      scrollTrigger: element,
      onUpdate: function () {
        count.text(zero.val.toFixed(decimals));
      },
    });
  });
});

// topggle - 반응형
$('.toggle').click(function () {
  $('.main-menu').slideToggle();
});

// main-menu 미디어쿼리로 실행되지 않아 script 사용

$(window).resize(function () {
  if ($(window).width() > 768) {
    //true
    $('.main-menu').show();
  } else {
    // false
    $('.main-menu').hide();
  }
});

const $service = $('.services');
const $serviceItem = $('.service_item');
const $serviceHeight = $service.offset().top - 600;

$(window).scroll(function () {
  $serviceItem.each(function () {
    const $serviceData = $(this).attr('data-ani');
    if (window.scrollY > $serviceHeight) {
      $serviceItem.addClass($serviceData);
      $serviceItem.css('opacity', 1);
    }
  });
});
