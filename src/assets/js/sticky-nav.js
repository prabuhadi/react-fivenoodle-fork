export default function Header() {
  const header = document.getElementById("header");
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.style.height = "90px";
    } else {
      header.style.height = "120px";
    }
  });

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });

  return true;
}
