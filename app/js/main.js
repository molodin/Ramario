$(document).ready(function () {

  // Header Search
  $('.header .item-search, .search-form-close').on('click', function (e) {
    $('.search-form').slideToggle(300);
    e.preventDefault();
  });

  // Add class active nav item for border
  $('.header-main-nav-show').on('mouseover', function() {
    $(this).prev().addClass('active');
  });
  $('.header-main-nav-show').on('mouseleave', function() {
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

  // Hero item height (first img)
  // var heroHeight = $('.hero-carousel .item img').height();
  // $('.hero-carousel .item').css('height', heroHeight);
  // $(window).on('resize', function() {
  //   var heroHeight = $('.hero-carousel .item img').height();
  //   $('.hero-carousel .item').css('height', heroHeight);
  // });

  // $('.category-two a.item').height();
  // $('.category-two-show').css('height', (($('.category-two a.item').height() * 2) +30))


});