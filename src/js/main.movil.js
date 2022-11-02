const menuBtn = document.querySelector('.menuBtn');
const mainMenu = document.querySelector('.mainMenu');
const body = document.body;


menuBtn.addEventListener('click', (e) => {

    menuBtn.classList.toggle('act')

    if (menuBtn.classList.contains("act")) {
        mainMenu.classList.add('act')
        body.style.overflow = "hidden";
    } else {
        mainMenu.classList.remove('act')
        body.style.overflow = "scroll";
    }
})