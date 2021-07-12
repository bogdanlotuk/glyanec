
let mySwiper = new Swiper (".swiper-container.swiper-advantages", {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    allowTouchMove: true,
    breakpoints: {       
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1800: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
});
