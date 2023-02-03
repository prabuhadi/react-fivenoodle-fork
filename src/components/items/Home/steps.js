import React from "react";

import App1 from "./../../../assets/img/app/App1.PNG";
import App2 from "./../../../assets/img/app/App2.PNG";
import App3 from "./../../../assets/img/app/App3.PNG";

const steps = () => {
  return (
    <div>
      <section class="section-how">
        <div class="container">
          <span class="subheading">How Fivenoodle Works</span>
          <h2 class="heading-secondary head-how">
            Ordering delicious food at home was never this easy!
          </h2>
          <p class="how-description">
            With our Fivenoodle app, you can customize your order and have it
            delivered to your door in fastest way. All you have to do is follow
            3 simple steps, order quick and easy with our simple-to-use
            interface, and enjoy your meal. You don't need to worry about any
            details. Fivenoodle will take care of it for you. All you need to do
            is choose the type of dishes you want, how many people you need it
            for, and a time that's convenient for you. Done! Your food is on its
            way.
          </p>
        </div>

        <div class="container grid grid--2-cols grid--center">
          <div class="step-text-box">
            <p class="step-number">Step 1</p>
            <h3 class="heading-tertiary">Tell us what you like</h3>
            <p class="step-description">
              Never again waste time thinking about what to eat! Fivenoodle will
              recommend your meal that suits you!. It makes sure you get all the
              nutrients and vitamins you need, no matter what diet you follow!
            </p>
          </div>
          <div class="step-img-box">
            <img class="step-img" src={App1} alt="main apps screen" />
          </div>

          <div class="step-img-box">
            <img class="step-img" src={App2} alt="order list screen" />
          </div>
          <div class="step-text-box">
            <p class="step-number">Step 2</p>
            <h3 class="heading-tertiary">Approve your meal plan</h3>
            <p class="step-description">
              Approve the meal plan generated for you by Fivenoodle AI. You can
              change ingredients, swap entire meals, or even add your own
              recipes. Our chef can adapt any ingredient you want.
            </p>
          </div>

          <div class="step-text-box">
            <p class="step-number">Step 3</p>
            <h3 class="heading-tertiary">Receive meals at convenient time</h3>
            <p class="step-description">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div class="step-img-box">
            <img class="step-img" src={App3} alt="delivery screen" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default steps;
