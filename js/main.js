// Add header background on scroll

let nav = document.getElementById("nav");
let logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  if (pageYOffset > 50) {
    navlinkMobile.classList.add("hidden");
    nav.classList.add("changed");
    logo.style.width = "70%";
  } else if (pageYOffset < 1) {
    nav.classList.remove("changed");
  }
});

// Make hamburger Menu disappear/appear

let btnHamburger = document.getElementById("btn-hamburger");
let navlinkMobile = document.getElementById("navlink-mobile");

btnHamburger.addEventListener("click", () => {
  navlinkMobile.classList.toggle("hidden");
  btnHamburger.classList.toggle("fa-times");
});

// Products

let productBtn = document.getElementsByClassName("product-btn");
let divProduct = document.getElementsByClassName("div-products");
let productDescription = document.getElementsByClassName("product-description");
let consoleTitle = document.getElementById("console-header-title");
let index = 0;

$(function () {
  $.getJSON("./sources/content.json", (data) => {
    console.log(data[0]["title"]);
    divProduct[0].classList.add("div-products-selected");
    productDescription[0].innerHTML = data[0]["content"];
    consoleTitle.innerHTML = data[0]["title"];
  });

  for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener("click", () => {
      if (index != i) {
        divProduct[index].classList.remove("div-products-selected");
        divProduct[i].classList.add("div-products-selected");
        index = i;
      }

      $.getJSON("./sources/content.json", (data) => {
        productDescription[0].innerHTML = data[i]["content"];
        consoleTitle.innerHTML = data[i]["title"];
      });
    });
  }
});

// Send notification when form is submitted

let submitBtn = document.getElementById("submitBtn"),
  inputName = document.getElementById("inputName"),
  inputEmail = document.getElementById("inputEmail"),
  inputCompany = document.getElementById("inputCompany"),
  inputPosition = document.getElementById("inputPosition"),
  inputMessage = document.getElementById("inputMessage");
submitBtn.addEventListener("click", (e) => {
  if (
    inputName.value.length > 0 &&
    inputEmail.value.length > 0 &&
    inputEmail.value.includes("@") &&
    inputCompany.value.length > 0 &&
    inputPosition.value.length > 0 &&
    inputMessage.value.length > 0
  )
    new Notification("Message sent !");
});
