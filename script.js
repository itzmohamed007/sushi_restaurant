let select = document.querySelector(".drop-down");
let products = document.querySelectorAll(".product-box");

select.addEventListener("change", function () {
  let selectValue = select.value;
  for (let element of products) {
    if (selectValue == "menu") {
      element.style.display = "block";
    }else if(element.classList.contains(selectValue)){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
  }
});

// ======================================================

const openMenu = document.querySelector(".menu");
const navBar = document.querySelector(".nav");
const closeMenu = document.querySelector(".exit");

openMenu.onclick = () => {
    navBar.classList.add("active");
  };

  closeMenu.onclick = () =>{
    navBar.classList.remove("active");
  };

