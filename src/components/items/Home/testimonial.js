import React from "react";

import Customer1 from "./../../../assets/img/customer/Paul John.jpg";
import Customer2 from "./../../../assets/img/customer/Amber Red.jpg";
import Customer3 from "./../../../assets/img/customer/Kate Allison.jpg";

import Galeri1 from "./../../../assets/img/gallery/gallery1.webp";
import Galeri2 from "./../../../assets/img/gallery/gallery2.webp";
import Galeri3 from "./../../../assets/img/gallery/gallery3.webp";
import Galeri4 from "./../../../assets/img/gallery/gallery4.webp";
import Galeri5 from "./../../../assets/img/gallery/gallery5.webp";
import Galeri6 from "./../../../assets/img/gallery/gallery6.webp";
import Galeri7 from "./../../../assets/img/gallery/gallery7.webp";
import Galeri8 from "./../../../assets/img/gallery/gallery8.webp";
import Galeri9 from "./../../../assets/img/gallery/gallery9.webp";
import Galeri10 from "./../../../assets/img/gallery/gallery10.webp";

const testimonial = () => {
  return (
    <div>
      <section class="section-testimonials grid grid--2-cols">
        <div class="testimonials-container">
          <span class="subheading">testimonials</span>
          <h2 class="heading-secondary">
            When it comes to healthy eating, Fivenoodle is your answer.
          </h2>

          <div class="testimonials">
            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={Customer1}
                alt="Photo of customer Paul John"
              />
              ,
              <blockquote class="testimonial-text">
                Just tried the green udon for the first time and it was
                delicious. I special order a few different items through my
                local health food store and they are weekly staples for lunch
                and dinner. Love Awesome Foods!!
              </blockquote>
              <p class="testimonial-name">&mdash; Paul John</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={Customer2}
                alt="Photo of customer Amber Red"
              />
              ,
              <blockquote class="testimonial-text">
                Just fell in love with the vegetable noodle! It really is so
                good and healthy. Can't wait to try more Awesome Noodle!! Thank
                you!!!
              </blockquote>
              <p class="testimonial-name">&mdash; Amber Red</p>
            </figure>

            <figure class="testimonial">
              <img
                class="testimonial-img"
                src={Customer3}
                alt="Photo of customer Kate Allison"
              />
              ,
              <blockquote class="testimonial-text">
                Thank you for your food. It's so fresh and delicious and it
                takes the work and guess-work out of my busy life when it comes
                to eating. Awesome Foods is AWESOME! You have a customer for
                life!
              </blockquote>
              <p class="testimonial-name">&mdash; Kate Allison</p>
            </figure>
          </div>
        </div>
        <div class="gallery">
          <figure class="gallery-item">
            <img src={Galeri1} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri2} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri3} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri4} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri5} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri6} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri7} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri8} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri9} alt="Beutifull foody photo" />
          </figure>
          <figure class="gallery-item">
            <img src={Galeri10} alt="Beutifull foody photo" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default testimonial;
