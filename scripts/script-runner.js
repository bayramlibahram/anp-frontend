
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
            dots: false
        },
        768: {
            items: 1,
            nav: false,
            dots: true
        }
    },
});

//init Media carousel
$(".owl-media").owlCarousel({
    autoplay: true,
    loop: true,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        768:{
            nav: true,
            owl2row: true,
            items:4
        }

    }

});
