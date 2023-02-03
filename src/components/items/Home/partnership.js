import React from "react";

import Logo1 from "./../../../assets/img/logo/logo1.png";
import Logo2 from "./../../../assets/img/logo/logo2.png";
import Logo3 from "./../../../assets/img/logo/logo3.png";
import Logo4 from "./../../../assets/img/logo/logo4.png";
import Logo5 from "./../../../assets/img/logo/logo5.png";
import Logo6 from "./../../../assets/img/logo/logo6.png";
import Logo7 from "./../../../assets/img/logo/logo7.png";
import Logo8 from "./../../../assets/img/logo/logo8.png";

const partnership = () => {
  return (
    <div>
      <section class="section-partnership">
        <div class="container">
          <h2 class="heading-partnership">Our partnership</h2>
          <div class="logos">
            <img src={Logo1} alt="logo rumah buah" />
            <img src={Logo2} alt="logo transmart" />
            <img src={Logo3} alt="logo uniliver" />
            <img src={Logo4} alt="logo aqua" />
            <img src={Logo5} alt="logo tani" />
          </div>
          <div class="logos logos--last">
            <img src={Logo6} alt="logo rumah buah" />
            <img src={Logo7} alt="logo transmart" />
            <img src={Logo8} alt="logo uniliver" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default partnership;
