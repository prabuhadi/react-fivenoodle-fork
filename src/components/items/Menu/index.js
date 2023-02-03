import React, { useEffect } from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import { IonIcon } from "react-ion-icon";
// import "../../../assets/css/home.css";
import "../../../assets/css/home.css";
import "../../../assets/css/menu.css";
import greenUdonImg from "../../../assets/img/meal/green-udon.webp";
import img1 from "../../../assets/img/meal/img1.jpg";
import img2 from "../../../assets/img/meal/img2.jpg";
import img3 from "../../../assets/img/meal/img3.jpg";
import img4 from "../../../assets/img/meal/img4.jpg";
import img5 from "../../../assets/img/meal/img5.jpg";
import spaghettiVegan from "../../../assets/img/meal/spaghetti-vegan.webp";
import vegetableNoodle from "../../../assets/img/meal/vegetable-noodle.webp";

const Index = () => {
  useEffect(() => {
    const menuNoodle = document.querySelectorAll(".nav-link-menu");
    const foodItems = document.querySelectorAll(".meal");

    let activeMenu = "all";

    showFoodMenu(activeMenu);

    menuNoodle.forEach((menu) => {
      menu.addEventListener("click", () => {
        resetActiveMenu();
        showFoodMenu(menu.id);
        menu.classList.add("main-color");
      });
    });

    function resetActiveMenu() {
      menuNoodle.forEach((menu) => {
        menu.classList.remove("main-color");
      });
    }

    function showFoodMenu(newMenu) {
      activeMenu = newMenu;
      foodItems.forEach((item) => {
        if (item.classList.contains(activeMenu)) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <section className="section-meals">
        <div className="container center-text">
          <span className="subheading">Noodles</span>
          <h2 className="heading-secondary">
            Get your noodle with healthy and delicious recipes
          </h2>
        </div>

        <div className="nav-margin">
          <ul className="nav-menu">
            <li>
              <a className="nav-link-menu main-color" id="all" href="#all">
                All
              </a>
            </li>
            <li>
              <a className="nav-link-menu" id="noodle" href="#noodle">
                Noodle
              </a>
            </li>
            <li>
              <a className="nav-link-menu" id="sphagetti" href="#spaghetti">
                Spaghetti
              </a>
            </li>
            <li>
              <a className="nav-link-menu" id="desert" href="#desert">
                desert
              </a>
            </li>
          </ul>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal noodle all">
            <img
              className="meal-img"
              src={vegetableNoodle}
              alt="Vegetable Noodle"
            />
            <div className="meal-content">
              <p className="meal-title">Vegetable Noodle</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>650</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>83</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (1.685)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>60.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="meal sphagetti all">
            <img
              className="meal-img"
              src={spaghettiVegan}
              alt="Spaghetti Vegan"
            />
            <div className="meal-content">
              <p className="meal-title">Spaghetti Vegan</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="meal noodle all">
            <img
              className="meal-img"
              src={greenUdonImg}
              alt="Spaghetti Vegan"
            />
            <div className="meal-content">
              <p className="meal-title">Green Udon</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>700</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>88</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (2.261)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>70.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img1} alt="Kelengkeng Kiamboy" />
            <div className="meal-content">
              <p className="meal-title">Kelengkeng Kiamboy</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img5} alt="Apple Tart" />
            <div className="meal-content">
              <p className="meal-title">Apple Tart</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="meal desert all">
            <img className="meal-img" src={img3} alt="Ajitsuke Tamago" />
            <div className="meal-content">
              <p className="meal-title">Ajitsuke Tamago</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="flame-outline"
                  ></ion-icon>
                  <span>
                    <strong>1900</strong> Calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>80</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="star-outline"
                  ></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (1809)
                  </span>
                </li>
              </ul>
              <div className="order">
                <a href="#" className="btn--order">
                  Order
                </a>
                <p className="price">
                  <span>IDR</span> <strong>45.000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
