const nav = document.querySelector("nav ul");

const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerMenuChildren = document.querySelectorAll(".line");

hamburgerMenu.addEventListener("click", () => nav.classList.toggle("open"));

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 768) {
    nav.classList.remove("open");
  }
});
