$(".owl-right-top").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 6000,
    items: 1,
    dots: false,
    nav: false,
    autoplaySpeed: 2000

});

$(".owl-right-bottom").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 7000,
    items: 1,
    dots: false,
    autoplaySpeed: 2000,
});

$(".owl-container").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    items: 1,
    margin: 5,
    dots: true,
    nav: false,
    autoplaySpeed: 2000

});

$(".owl-video").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 4,

        }
    },
    margin: 5,
    dots: false,
    nav: false,
    autoplaySpeed: 2000

});

$(".owl-writters").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 6,

        }
    },
    margin: 5,
    dots: false,
    nav: false,
    autoplaySpeed: 2000

});

$(".owl-partners").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 5,

        }
    },
    margin: 5,
    dots: false,
    nav: false,
    autoplaySpeed: 2000

});

function activateNiceScroll() {
    if (document.body.offsetWidth > 768) {

        $("#latestpostlist").niceScroll({
            cursorcolor: "#ca0000",
            cursorwidth: "10px",
            cursoropacitymax: 0.7
        });
    }
}

function funcsForBodyResize() {
   
    activateNiceScroll();
    
}

$(document).ready(function () {
    window.onresize = funcsForBodyResize;
    funcsForBodyResize();
});


