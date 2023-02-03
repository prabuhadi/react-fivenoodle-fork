import React from "react";

import meal1 from "./../../../assets/img/meal/vegetable-noodle.jpg";
import meal2 from "./../../../assets/img/meal/spaghetti-vegan.jpg";
import meal3 from "./../../../assets/img/meal/green-udon.jpg";

const meals = () => {
  return (
    <div>
      <section class="section-meals">
        <div class="container center-text">
          <span class="subheading">Noodles</span>
          <h2 class="heading-secondary">
            Get your noodle with healthy and delicious recipes
          </h2>
        </div>

        <div class="container grid grid--3-cols margin-bottom-md">
          <div class="meal">
            <img class="meal-img" src={meal1} alt="Vegetable Noodle" />
            <div class="meal-content">
              <p class="meal-title">Vegetable Noodle</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong>650</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>83</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (1.685)
                  </span>
                </li>
              </ul>
              <div class="details">
                <a href="#" class="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
          <div class="meal">
            <img class="meal-img" src={meal2} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Spaghetti Vegan</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (872)
                  </span>
                </li>
              </ul>
              <div class="details">
                <a href="#" class="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
          <div class="meal">
            <img class="meal-img" src={meal3} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Green Udon</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                  <span>
                    <strong>700</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon
                    class="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>
                    NutriScore &reg; <strong>88</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                  <span>
                    <strong>4.9</strong> Rating (2.261)
                  </span>
                </li>
              </ul>
              <div class="details">
                <a href="#" class="link">
                  More details &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container our-menu">
          <a class="link" href="/components/our-menu.html">
            See all our menu &rarr;
          </a>
        </div>
      </section>
    </div>
  );
};

export default meals;
