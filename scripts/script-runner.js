//Init Slider carousel
$(".owl-main").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 2000,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
    },
    768: {
      items: 1,
      nav: false,
      dots: true,
    },
  },
});
