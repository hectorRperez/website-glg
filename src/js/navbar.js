var nav = document.querySelector('.navbar')
var welcomeTitle = document.querySelector('.welcome__smallTitle')
var navbar__movil = document.querySelector('.navbar__movil')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        navbar__movil.classList.add('bg-dark-scroll', 'shadow')
        nav.classList.add('bg-dark-scroll', 'shadow', 'p-2')
    } else {
        navbar__movil.classList.remove('bg-dark-scroll', 'shadow')
        nav.classList.remove('bg-dark-scroll', 'shadow', 'p-2')
    }
})

// var myCarousel = document.querySelector('#carouselExampleIndicators')
// var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 1800,
// })