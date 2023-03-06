import React from "react";

import meal1 from "./../../../assets/img/meal/vegetable-noodle.webp";
import meal2 from "./../../../assets/img/meal/spaghetti-vegan.webp";
import meal3 from "./../../../assets/img/meal/green-udon.webp";
import { IonIcon } from "react-ion-icon";
import { flameOutline } from "ionicons/icons";
import { restaurantOutline } from "ionicons/icons";
import { starOutline } from "ionicons/icons";

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
          <div class="meal meal-home">
            <img class="meal-img" src={meal1} alt="Vegetable Noodle" />
            <div class="meal-content">
              <p class="meal-title">Vegetable Noodle</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>650</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>83</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
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
          <div class="meal meal-home">
            <img class="meal-img" src={meal2} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Spaghetti Vegan</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>600</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>79</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
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
          <div class="meal meal-home">
            <img class="meal-img" src={meal3} alt="Spaghetti Vegan" />
            <div class="meal-content">
              <p class="meal-title">Green Udon</p>
              <ul class="meal-attributes">
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={flameOutline}></IonIcon>
                  <span>
                    <strong>700</strong> Calories
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={restaurantOutline}></IonIcon>
                  <span>
                    NutriScore &reg; <strong>88</strong>
                  </span>
                </li>
                <li class="meal-attribute">
                  <IonIcon class="meal-icon" icon={starOutline}></IonIcon>
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
