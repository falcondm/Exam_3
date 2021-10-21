// import $ from 'jquery';

$(document).ready(function() {
    $('.slider1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //       }
        //     }
        // ]
    });
    $('.slider2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        arrows: true,
        dots: true,
        infinite: true,
        prevArrow: '<img class="slick-prev slick-arrow" src="./img/svg/chevron-left-solid.svg">',
        nextArrow: '<img class="slick-next slick-arrow" src="./img/svg/chevron-right-solid.svg">',
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //       }
        //     }
        // ]
    });
    $('.slider3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        arrows: false,
        dots: true,
        infinite: true,
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //       }
        //     }
        // ]
    });
    $('.slider4').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        arrows: true,
        infinite: true,
        prevArrow: '<div class="slick-prev slick-arrow"><img class="arrow" src="./img/svg/chevron-left-solid.svg"></div>',
        nextArrow: '<div class="slick-next slick-arrow"><img class="arrow" src="./img/svg/chevron-right-solid.svg"></div>',
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //       }
        //     }
        // ]
    });
    $('.slider5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 4000,
        arrows: true,
        infinite: false,
        prevArrow: '<img class="slick-prev slick-arrow" src="./img/svg/svg.svg">',
        nextArrow: '<img class="slick-next slick-arrow" src="./img/svg/svg.svg">',
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         infinite: true,
        //         dots: false,
        //       }
        //     }
        // ]
    });
    $('.slick-dots>li>button').text('');
})