history.scrollRestoration = "manual";

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});




var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})

const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})




var swiper = new Swiper(".mySwiper2", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    loop: true,
});

$(".mySwiper2").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});



var Swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
});

$(".mySwiper").hover(function() {
    (this).swiper.autoplay.stop();
}, function() {
    (this).swiper.autoplay.start();
});



var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});



var back = $('.navbackground');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        back.addClass('show');
    } else {
        back.removeClass('show');
    }
});