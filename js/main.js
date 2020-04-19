// Add header background on scroll

let header = document.getElementsByTagName('header');
let nav = header[0].children[0]
let logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    if (pageYOffset > 50) {
        nav.classList.add('changed')
        nav.style.height = "3.5rem"
        logo.style.width = "70%"
    } else if (pageYOffset < 1) {
        nav.classList.remove('changed');
    }
});


// Make hamburger Menu disappear/appear

let menuMobile = document.getElementById('navlink-container-mobile');
let btnHamburger = document.getElementById('btn-hamburger');
let navlinkMobile = document.getElementById('navlink-mobile');


btnHamburger.addEventListener('click', () => {
    navlinkMobile.classList.toggle('hidden');
});



// Products

let productBtn = document.getElementsByClassName('product-btn');
let divProduct = document.getElementsByClassName('div-products');
let productDescription = document.getElementsByClassName('product-description');
let consoleTitle = document.getElementById('console-header-title');
let index = 0;



$(function () {




    $.getJSON('./sources/content.json', (data) => {
        divProduct[0].classList.add('div-products-selected');
        productDescription[0].innerHTML = data[0][0]["content"]
        productDescription[1].innerHTML = data[0][1]["content"]
        productDescription[2].innerHTML = data[0][2]["content"]
        consoleTitle.innerHTML = data[0][0]["title"]
    });

    for (let i = 0; i < productBtn.length; i++) {
        productBtn[i].addEventListener('click', () => {

            if (index != i) {
                divProduct[index].classList.remove('div-products-selected');
                divProduct[i].classList.add('div-products-selected');
                index = i;


            }

            $.getJSON('./sources/content.json', (data) => {
                productDescription[0].innerHTML = data[i][0]["content"]
                productDescription[1].innerHTML = data[i][1]["content"]
                productDescription[2].innerHTML = data[i][2]["content"]
                consoleTitle.innerHTML = data[i][0]["title"]
            });


        })
    }


});