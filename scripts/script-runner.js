$(".owl-main").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: false,
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

// $(".owl-media").owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     autoplayTimeout: 5000,
//     dots: false,
//     autoplaySpeed: 2000,
//     margin:10,
//     responsive: {
//         0: {
//             items: 1,
//             nav: false,
//             dots: false
//         },
//         768: {
//             items: 4,
//             nav: true,
//             dots: false,
//
//         }
//     },
// });
