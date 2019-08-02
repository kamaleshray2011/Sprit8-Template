$(document).ready(function() {
    $('.member-slider').owlCarousel({
        loop: true,
        margin: 25,
        slideBy: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.slider').owlCarousel({
        loop: true,
        margin: 50,
        slideBy: 1,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    var containerEl = document.querySelector('.filter-gallery');

    var mixer = mixitup(containerEl);





});

var preloader = document.getElementById("loading");

window.onload = function myFunction() {
    preloader.style.display = "none";
}