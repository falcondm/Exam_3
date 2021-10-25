'use strict';

// const $ = require('jquery');
// import $ from 'jquery';
// import './slick.min.js';
// import './sliders.js';

let videoPlay,
    clickCount = 0,
    timeline = document.querySelector('.video-dur'),
    bar = document.querySelector('.bar'),
    video = document.querySelector('.video'),
    btn = document.querySelector('#play-pause'),
    volume = document.querySelector('#volume'),
    amount = document.querySelectorAll('.amount'),
    getTicket = document.querySelectorAll('.get-ticket'),
    scrollToTop = document.querySelector('.scroll-top'),  
    smoothLinks = document.querySelectorAll('a[href^="#"]'),
    detailsBtn = document.querySelectorAll('#more-det'),
    slider3 = document.querySelector('.slider3'),
    close = document.querySelector('.close'),
    readButton = document.querySelector('.read-btn'),
    seconds = document.querySelector('#seconds'),
    minutes = document.querySelector('#minutes'),
    hours = document.querySelector('#hours'),
    days = document.querySelector('#days'),
    zoom = document.querySelectorAll('.zoom')

timeline.style.width = 0;

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        clearInterval(videoPlay);
        video.pause();
    }
}

btn.addEventListener('click', function () {
    togglePlayPause();
});

video.addEventListener('click', function() {
    togglePlayPause();
});

video.addEventListener('timeupdate', function() {
    videoPlay = setInterval(function() {
        let videoTime = Math.round(video.currentTime)
        let videoLength = Math.round(video.duration)
        timeline.style.width = (videoTime * 100) / videoLength + '%';
    }, 10)
    if (video.ended) {
        btn.className = 'play';
    }
});

volume.addEventListener('change', function(e) {
    video.volume = e.currentTarget.value / 100;
})

bar.addEventListener("click", function(e) {
    let posX = e.clientX - Math.round((document.documentElement.clientWidth - bar.offsetWidth) / 2);
    let timePos = (posX * 100) / 630;
    timeline.style.width = timePos + '%';
    video.currentTime = (timePos * Math.round(video.duration)) / 100;
});

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
        $('.tabs_hotel').toggleClass('active');
    });
});

$(document).mouseup(function (e){
    let tabs = $(".tabs");
    if (!tabs.is(e.target) && tabs.has(e.target).length === 0) {
        tabs.hide();
    }
    let container = $(".get_ticket");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        container.remove();
        document.body.style.overflowY = 'visible';
    }
    let cont = $(".more-det");
    if (!cont.is(e.target) && cont.has(e.target).length === 0) {
        cont.hide();
        cont.remove();
        document.body.style.overflowY = 'visible';
    }
});

$(function() {
    $('input[name="dates"]').daterangepicker({
        autoUpdateInput: false,
        locale: {
            cancelLabel: 'Clear'
        }
    });
  
    $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });
  
    $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
  
});

amount.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if (item.children.length < 2) {
            for (let i = 0; i <= 10; i++) {
                let listItem = document.createElement('option');
                listItem.value = i;
                listItem.textContent = i;
                e.target.appendChild(listItem);
            }
        }
    });
})

getTicket.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        let container = document.createElement('div');
        container.classList = 'get_ticket';
        container.style.display = 'flex';
        container.style.height = `${window.screen.height / 2}px`;
        container.style.top = `${window.screen.height / 2}px`;
        container.style.transform = `translate(-50%, -60%)`;
        container.appendChild(close);
        close.addEventListener('click', function(e) {
            container.style.display = 'none';
        })  
        document.body.appendChild(container);
        document.body.style.overflow = 'auto';
    })
})

window.addEventListener('scroll', function(e) {
    if (document.body.parentNode.scrollTop > 100) {
        scrollToTop.style.display = 'flex';
    } else {
        scrollToTop.style.display = 'none';
    }
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
})

function addMoreDet() {
    if (window.screen.width < 1600) {
        let moreDet = $('.slider3 > .slick-list > .slick-track > .slick-active > .content > .details-btn');
        let i = 0;
        moreDet.each(function(item) {
            i++;
            $(this).removeAttr('disabled')
            $(this).on('click', function(e) {
                e.preventDefault();
                let element = document.createElement('div');
                let text = document.createElement('p');
                text.style.fontFamily = 'OpenSans-Regular';
                text.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi doloremque ipsum perspiciatis ea vel placeat soluta, atque nobis nulla mollitia. Quia facere nihil soluta et ab harum natus beatae odit esse perspiciatis ex quidem reprehenderit, placeat, voluptates laudantium sint ducimus molestiae sed quasi magni. Officiis quae tempora nulla similique ipsa!';
                element.innerHTML = $('.slider3 > .slick-list > .slick-track > .slick-active')[item].outerHTML;
                element.appendChild(close);
                element.appendChild(text);
                close.addEventListener('click', function(e) {
                    element.style.display = 'none';
                })
                element.classList = 'more-det';
                element.style.display = 'flex';
                element.style.height = `fit-content`;
                element.style.flexDirection = 'column';
                element.style.padding = '10px'
                element.style.top = `${window.screen.height / 2}px`;
                if (window.screen.width < 992) {
                    element.style.top = `${window.screen.height / 1.7}px`;
                    element.style.width = `${window.screen.width / 10}%`
                }
                element.style.transform = `translate(-50%, -60%)`;
                document.body.appendChild(element);
            })
        })
    } else {
        for(let i = 0; i < slider3.children[0].children[0].children.length; i++) {
            let elem = slider3.children[0].children[0].children[i];
            let stat = slider3.children[0].children[0].children[i].classList.contains('slick-center');
            if (stat) {
                elem.children[1].children[1].removeAttribute('disabled')
                elem.children[1].children[1].addEventListener('click', function(e) {
                    e.preventDefault();
                    let element = document.createElement('div');
                    let text = document.createElement('p');
                    text.style.fontFamily = 'OpenSans-Regular';
                    text.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi doloremque ipsum perspiciatis ea vel placeat soluta, atque nobis nulla mollitia. Quia facere nihil soluta et ab harum natus beatae odit esse perspiciatis ex quidem reprehenderit, placeat, voluptates laudantium sint ducimus molestiae sed quasi magni. Officiis quae tempora nulla similique ipsa!';
                    element.innerHTML = elem.outerHTML;
                    element.appendChild(close);
                    element.appendChild(text);
                    close.addEventListener('click', function(e) {
                        element.style.display = 'none';
                    })
                    element.classList = 'more-det';
                    element.style.display = 'flex';
                    element.style.height = `${window.screen.height / 2}px`;
                    element.style.top = `${window.screen.height / 2}px`;
                    element.style.transform = `translate(-50%, -60%)`;
                    document.body.appendChild(element);
                })
            } else {
                elem.children[1].children[1].setAttribute('disabled', 'true')
            }
        }
    }
}

$(document).ready(addMoreDet);
$('.slider3').on('afterChange', addMoreDet);

let someText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, soluta modi accusantium est sit, accusamus ullam facere cupiditate rerum quam beatae quidem, veniam consequuntur commodi iste facilis temporibus aliquam asperiores eligendi! Exercitationem delectus dolor assumenda? Dolorem, aspernatur! Possimus repellat officia quaerat suscipit sint, optio cupiditate voluptate nihil quas nostrum ullam, velit nulla iste! Ullam, aliquam nulla quibusdam aliquid saepe quasi doloribus ratione recusandae dignissimos iure suscipit explicabo autem inventore repellendus nesciunt iste voluptatum a aperiam omnis veritatis nam repellat animi soluta? Itaque minima porro mollitia autem saepe accusantium asperiores ab rerum possimus harum. Quos omnis quasi natus laboriosam, odio doloribus.'
let readMore = document.querySelector('#read-more');
let packageEl = document.querySelector('#package');

readButton.addEventListener('click', function(e) {
    e.preventDefault();
    let newEl = document.createElement('p');
    newEl.textContent = someText;
    newEl.style.paddingTop = '5px';
    if (readButton.textContent === 'Read More') {
        readMore.children[2].appendChild(newEl);
        readMore.style.height = '550px';
        readMore.style.fontFamily = 'OpenSans-Regular';
        readMore.style.fontSize = '15px';
        readButton.textContent = 'Hide';
    } else {
        readMore.children[2].children[0].remove();
        readButton.textContent = 'Read More';
        readMore.style.height = '300px';
    }
    
})

let second = 60;
let day = 364;
let hour = 23;
let minute = 59;


function getSeconds() {
    seconds.textContent = second;
    minutes.textContent = minute;
    hours.textContent = hour;
    days.textContent = day;

    second--;

    if (second < 10) {
        second = `0${second}`;
    } 
    if (minute < 10) {
        minute = `0${minute}`;
    } 
    if (hour < 10) {
        hour = `0${hour}`;
    } 
    if (day < 10) {
        day = `0${day}`;
    }
    
    if (second === '00') {
        second = 60;
        minute--;
        if (minute ==='00' && second === '00') {
            minute = 59;
            hour--;
            if (hour === '00' && minute ==='00' && second === '00') {
                hour = 23;
                day--;
                if (day === '00' && hour === '00' && minute ==='00' && second === '00') {
                    hour = 23;
                    day = 364;
                    minute = 59;
                    second = 60;
                }
            }
        }
    }
}

function count() {
    setInterval(getSeconds, 1000);
}

count();

zoom.forEach(function(item) {
    item.addEventListener('click', function(e) {
        ++clickCount;
        if (clickCount === 1) {
            item.style.transform = 'scale(1.5)';
            item.style.position = 'relative';
            item.style.zIndex = '4';
            item.classList.add('unzoom');
        } else  {
            clickCount = 0;
            item.style.transform = 'scale(1)';
            item.style.zIndex = '1';
            item.classList.remove('unzoom');
        }
        window.addEventListener('click', function(event) {
            if (!event.target.closest('.zoom')) {
                item.style.transform = 'scale(1)';
                item.style.zIndex = '1';
                item.classList.remove('unzoom');
                clickCount = 0;
            }  
        })
    })
}) 
$('.slider5 > .slick-list > .slick-track > .slider__item').each(function(index) {
    $(this).removeAttr("style")
  })