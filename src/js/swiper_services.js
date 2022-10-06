var swiper = new Swiper(".logistic-mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 70,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".logistic-swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".logistic-swiper-button-next",
        prevEl: ".logistic-swiper-button-prev",
    },
});