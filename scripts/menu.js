const menuButton = document.querySelector('.menu-button')
const overlay = document.querySelector('.overlay')
const openMenu = document.getElementById('open-menu')
const menuParts = document.querySelector('.menuPart1')
const menuParts2 = document.querySelector('.menuPart2')
const menuParts3 = document.querySelector('.menuPart3')
const menuParts4 = document.querySelector('.menuPart4')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active')
    overlay.classList.toggle('active')
    openMenu.classList.toggle('active')
    menuParts.classList.toggle('active')
    menuParts2.classList.toggle('active')
    menuParts3.classList.toggle('active')
    menuParts4.classList.toggle('active')
    openMenu.classList.toggle('not-active')
})

overlay.addEventListener('click', () => {
    menuButton.classList.remove('active')
    overlay.classList.remove('active')
    openMenu.classList.remove('active')
    menuParts.classList.remove('active')
    menuParts2.classList.remove('active')
    menuParts3.classList.remove('active')
    menuParts4.classList.remove('active')
    openMenu.classList.toggle('not-active')
})