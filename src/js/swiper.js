let isMovil = false;

if (window.innerWidth < 800) {
    isMovil = true;
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: isMovil ? 1 : 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
