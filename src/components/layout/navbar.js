import "./../../index.css";
import Logo from "./../../assets/img/logo/5noodle-logo.png";
import Header from "../../assets/js/sticky-nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    var tmp = Header();
    setData(tmp);
  }, []);

  return (
    <header class="header" id="header">
      <nav class="main-nav-left">
        <ul class="main-nav-list">
          <li>
            <Link to={"/menu"} class="main-nav-link">
              Our Menu
            </Link>
          </li>
          <li>
            <Link to={"/about"} class="main-nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
      <Link to={"/"}>
        <img src={Logo} class="logo" alt="fivenoodle logo" />
      </Link>
      <nav class="main-nav-right">
        <ul class="main-nav-list">
          <li>
            <Link to={"/blog"} class="main-nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/contact"} class="main-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
