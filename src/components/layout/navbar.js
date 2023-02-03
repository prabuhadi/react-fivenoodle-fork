import "./../../index.css";
import Logo from "./../../assets/img/logo/5noodle-logo.png";

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.height = "90px";
  } else {
    header.style.height = "120px";
  }
});

const navbar = () => {
  return (
    <header class="header" id="header">
      <nav class="main-nav-left">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="./../items/menu">
              Our Menu
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="./../items/about">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <a href="./../items/home">
        <img src={Logo} class="logo" alt="fivenoodle logo" />
      </a>
      <nav class="main-nav-right">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="./../items/blog">
              Blog
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="./../items/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navbar;
