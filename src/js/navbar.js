var nav = document.querySelector('.navbar')
var welcomeTitle = document.querySelector('.welcome__smallTitle')
var test__img = document.querySelector('.test__img');

console.log(test__img);


window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark-scroll', 'shadow', 'p-2')
    } else {
        test__img.src = "/src/img/Capa 1.png";
        nav.classList.remove('bg-dark-scroll', 'shadow', 'p-3')
    }
})

var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1800,
})