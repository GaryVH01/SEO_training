// Créez un nouveau fichier JS nommé menu.js
document.addEventListener("DOMContentLoaded", function () {
  const menuBurger = document.querySelector(".menu-burger");
  const navbarMenu = document.querySelector(".navbar-menu");
  const card = document.querySelector(".card");

  menuBurger.addEventListener("click", function () {
    menuBurger.classList.toggle("active");
    navbarMenu.classList.toggle("active");
  });

  // Fermer le menu quand on clique sur un lien
  const navLinks = document.querySelectorAll(".navbar-menu li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuBurger.classList.remove("active");
      navbarMenu.classList.remove("active");
    });
  });

  // Fermer le menu quand on clique en dehors
  document.addEventListener("click", function (event) {
    if (
      !menuBurger.contains(event.target) &&
      !navbarMenu.contains(event.target)
    ) {
      menuBurger.classList.remove("active");
      navbarMenu.classList.remove("active");
    }
  });
});
