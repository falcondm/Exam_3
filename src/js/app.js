'use strict';

// const $ = require('jquery');
// import $ from 'jquery';
// import './slick.min.js';
// import './sliders.js';

let qwe = document.querySelector('#show'),
    click = 0,
    bar = document.querySelector('.black-bar'),
    video = document.querySelector('.video'),
    btn = document.querySelector('#play-pause'),
    volume = document.querySelector('#volume');

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

btn.addEventListener('click', function () {
    togglePlayPause();
});

video.addEventListener('timeupdate', function() {
    let barPos  = video.currentTime / video.duration;
    bar.style.width = barPos * 100 + "%";
    if (video.ended) {
        btn.className = 'play';
    }
});

video.addEventListener('click', function() {
    togglePlayPause();
});

volume.addEventListener('change', function(e) {
    video.volume = e.currentTarget.value / 100;
})

$('body').on('click', '.pass', function(){
    if ($('.password').attr('type') === 'password'){
        $('.show').css('display','none');
        $('.hidden').css('display','inline');
        $('.password').attr('type', 'text');
    } else {        
        $('.show').css('display','inline');
        $('.hidden').css('display','none');
        $('.password').attr('type', 'password');
    }
    return false;
});

$('.login').on('click', function() {
    $('.signin').removeClass('active');
    $('.log-in').addClass('active');
    $('.tabs').show();
})
$('.register').on('click', function() {
    $('.log-in').removeClass('active');
    $('.signin').addClass('active');
    $('.tabs').show();
})
$('.close').on('click', function() {
    $('.tabs').hide();
})

$(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $('.signin').toggleClass('active');
        $('.log-in').toggleClass('active');
    });
});

$(function() {
    $('.choise-tabs__caption').on('click', 'li:not(.active)', function() {
        $('.choise-tabs__item').toggleClass('active');
        $('.tabs__hotel').toggleClass('active');
    });
});

$(document).mouseup(function (e){
    let tabs = $(".tabs");
    if (!tabs.is(e.target)
        && tabs.has(e.target).length === 0) {
            tabs.hide();
    }
});

