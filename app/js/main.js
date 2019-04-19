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

  $('.top-carousel').owlCarousel({
    loop: 0,
    items: 6,
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

  $(window).on('resize load', function () {
    if (window.matchMedia('(max-width: 1279px)').matches) {
      $('.catalog-wrap').before($('.filter-catalog'));
    } else {
      $('.forFilterCatalogBefore').before($('.filter-catalog'));
    };
  });

  $('.filter-catalog-close').on('click', function () {
    $('.filter-catalog').removeClass('on');
  });
  $('.filter-show').on('click', function () {
    $('.filter-catalog').addClass('on');
  });

});