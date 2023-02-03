import React from "react";

import Hero from "./hero";
import Partnership from "./partnership";
import Feature from "./feature";
import Steps from "./steps";
import Meal from "./meals";
import Testimonial from "./testimonial";
import CTA from "./cta";

const home = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <Feature />
      <Steps />
      <Meal />
      <Testimonial />
      <CTA />
    </div>
  );
};

export default home;
