// import $ from 'jquery';

$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                infinite: true,
                centerMode: false
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1
                }
              }
        ]
    });
    $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        infinite: true,
        prevArrow: '<img class="slick-prev slick-arrow" src="./img/svg/chevron-left-solid.svg">',
        nextArrow: '<img class="slick-next slick-arrow" src="./img/svg/chevron-right-solid.svg">',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
              }
            }
        ]
    });
    $('.slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });
    $('.slider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        infinite: true,
        prevArrow: '<div class="slick-prev slick-arrow"><img class="arrow" src="./img/svg/chevron-left-solid.svg"></div>',
        nextArrow: '<div class="slick-next slick-arrow"><img class="arrow" src="./img/svg/chevron-right-solid.svg"></div>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });
    $('.slider5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        arrows: true,
        infinite: false,
        prevArrow: '<img class="slick-prev slick-arrow" src="./img/svg/svg.svg">',
        nextArrow: '<img class="slick-next slick-arrow" src="./img/svg/svg.svg">',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
    });

    $('.slick-dots>li>button').text('');
})