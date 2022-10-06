var nav = document.querySelector('.navbar')
var welcomeTitle = document.querySelector('.welcome__smallTitle')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark-scroll', 'shadow', 'p-2')
    } else {
        nav.classList.remove('bg-dark-scroll', 'shadow', 'p-2')
    }
})

var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2500,
})