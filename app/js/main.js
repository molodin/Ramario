$(document).ready(function () {

  // Header Search
  $('.header .item-search, .search-form-close').on('click', function (e) {
    $('.search-form').slideToggle(300);
    e.preventDefault();
  });

  // Add class active nav item for border
  $('.header-main-nav-show').on('mouseover', function () {
    $(this).prev().addClass('active');
  });
  $('.header-main-nav-show').on('mouseleave', function () {
    $(this).prev().removeClass('active');
  });

  // Hero Carousel
  $('.hero-carousel').owlCarousel({
    loop: true,
    items: 1,
    margin: 30,
    nav: true,
    navText: '',
    dots: false,
    smartSpeed: 1000
  });

  $('.category-one-carousel').owlCarousel({
    loop: 0,
    items: 3,
    margin: 30,
    nav: 0,
    navText: '',
    dots: 0,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: 1,
      },
      640: {
        items: 2,
        nav: 1,
      },
      960: {
        items: 3
      }
    }
  });

  $('.more-card-carousel').owlCarousel({
    loop: 0,
    margin: 30,
    nav: 1,
    navText: '',
    dots: 0,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      960: {
        items: 3
      },
      1280: {
        items: 4
      },
      1610: {
        items: 5
      },
      1611: {
        items: 6
      }
    }
  });

  $('.top-carousel').owlCarousel({
    loop: 0,
    margin: 30,
    nav: 1,
    navText: '',
    dots: 0,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1
      },
      640: {
        items: 2
      },
      960: {
        items: 3
      },
      1280: {
        items: 4
      },
      1610: {
        items: 5
      },
      1611: {
        items: 6
      }
    }
  });

  $('.header-main-nav-btn').on('click', function (e) {
    $('.header-main-nav').toggleClass('on');
    e.preventDefault();
  });
  $('.header-main-nav > li > a').on('click', function (e) {
    $('.header-main-nav-show').removeClass('on');
    $(this).next('.header-main-nav-show').addClass('on');
    $(this).addClass('on');
    e.preventDefault();
  });

  $('.filter-catalog .item-btn').on('click', function (e) {
    $(this).parent().toggleClass('on');
    $(this).next().slideToggle(300);
    e.preventDefault();
  });

  $('.select-custom').selectmenu();

  $('.filter-catalog-close').on('click', function () {
    $('.filter-catalog').removeClass('on');
  });
  $('.filter-show').on('click', function () {
    $('.filter-catalog').addClass('on');
  });

  $('.card-gallery').fotorama({
    nav: 'thumbs',
    width: '100%',
    thumbborderwidth: 0,
    arrows: false
  });
  var fotoramaAPI = $('.fotorama').data('fotorama');

  $('.quantity-plus').on('click', function () {
    if ($(this).prev().val() < parseInt($(this).prev().attr('max'))) {
      $(this).prev().val(+$(this).prev().val() + 1);
    };
  });
  $('.quantity-minus').on('click', function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    };
  });

  $(window).on('resize load', function () {
    if (window.matchMedia('(max-width: 1279px)').matches) {
      $('.catalog-wrap').before($('.filter-catalog'));

      fotoramaAPI.setOptions({
        thumbwidth: 89,
        thumbheight: 121,
        thumbmargin: 20,
      });
    } else {
      $('.forFilterCatalogBefore').before($('.filter-catalog'));

      fotoramaAPI.setOptions({
        thumbwidth: 126,
        thumbheight: 171,
        thumbmargin: 28,
      });
    };
    if (window.matchMedia('(max-width: 959px)').matches) {
      fotoramaAPI.setOptions({
        thumbwidth: 130,
        thumbheight: 176,
        thumbmargin: 30,
      });
    };
    if (window.matchMedia('(max-width: 959px)').matches) {
      fotoramaAPI.setOptions({
        thumbwidth: 65,
        thumbheight: 88,
        thumbmargin: 10,
      });
    };
  });

  $(".basket-info").stick_in_parent({
    offset_top: 40
  });

  var myMap;
  ymaps.ready(init);
  function init() {
    myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 12,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    });
  };

});