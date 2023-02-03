const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.height = "90px";
  } else {
    header.style.height = "120px";
  }
});
