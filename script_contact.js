const openMenu = document.querySelector(".menu");
const navBar = document.querySelector(".nav");
const closeMenu = document.querySelector(".exit");

openMenu.onclick = () => {
    navBar.classList.add("active");
  };

  closeMenu.onclick = () =>{
    navBar.classList.remove("active");
  };

