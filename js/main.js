let menuMobile = document.getElementById('navlink-container-mobile');
let btnHamburger = document.getElementById('btn-hamburger');
let navlinkMobile = document.getElementById('navlink-mobile');


btnHamburger.addEventListener('click', () => {
    navlinkMobile.classList.toggle('hidden');
});