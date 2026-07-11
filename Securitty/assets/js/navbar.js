const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".menu-toggle");

// Prevent errors on pages that render navbar markup differently (e.g., quiz-play.html)
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  });
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// ==========================================
// ACTIVE NAVBAR
// ==========================================

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    const href = link.getAttribute("href");

    link.classList.remove("active");

    if(href === currentPage){

        link.classList.add("active");

    }

});