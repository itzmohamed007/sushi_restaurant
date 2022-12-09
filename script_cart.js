let select = document.querySelector(".drop-down");
let products = document.querySelectorAll(".product-box");

select.addEventListener("change", function () {
  let selectValue = select.value;

  for (let element of products) {
    if (selectValue == "menu") {
      element.style.display = "block";
    } else if (element.classList.contains(selectValue)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
});

// start of adding products function
const addToCartBtn = document.querySelectorAll(".add-cart");
let total = 0;

for (let el of addToCartBtn) {
  el.addEventListener("click", addProduct);
}

function addProduct(e) {
  let product = e.target;
  let title =
    product.parentElement.firstElementChild.nextElementSibling.innerText;
  let image = product.parentElement.firstElementChild.getAttribute("src");
  let price =
    product.parentElement.firstElementChild.nextElementSibling
      .nextElementSibling.innerText;
  let prix =
    product.parentElement.firstElementChild.nextElementSibling
      .nextElementSibling.innerText;
  let prixInt = parseInt(prix);
  total += prixInt;

  produits.innerHTML += `
    <div class="product">
      <img src="${image}" alt="image">
      <div class="title">${title}</div>
      <div class="price">${price}</div>
    </div>
  `;
}

function popUp() {
  alert(`Votre récapitulatif: ${total} DH`);
  document.getElementById("produits").innerHTML = "";
}
// end of adding products function

// mobile navigation botton
const openMenu = document.querySelector(".menu");
const navBar = document.querySelector(".nav");
const closeMenu = document.querySelector(".exit");

openMenu.onclick = () => {
  navBar.classList.add("active");
};

closeMenu.onclick = () => {
  navBar.classList.remove("active");
};

// cart navigation botton
var cartIcon = document.querySelector(".cart-icon");
var cart = document.querySelector(".CART");
var closeCart = document.querySelector(".cart-exit");

cartIcon.addEventListener("click", cartActive);
function cartActive() {
  cart.classList.toggle("CART-active");
}

closeCart.onclick = () => {
  cart.classList.remove("CART-active");
};
