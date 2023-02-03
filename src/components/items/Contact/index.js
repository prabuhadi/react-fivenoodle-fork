import React from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import "../../../assets/css/home.css";
import "../../../assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <>
      <Navbar />
      <section className="section-hero-contact">
        <div className="email-section">
          <div className="section-contact-left">
            <div className="title-contact">
              <h1>CONTACT US</h1>
            </div>
            <div className="option-contact">
              <div className="card-contact">
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
                <p>Jakarta, Gg.Kenari No.88</p>
              </div>
              <div className="card-contact">
                <i className="fa-regular fa-envelope"></i>
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <p>five@noodle.com</p>
              </div>
              <div className="card-contact">
                <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
                <i className="fa-brands fa-whatsapp"></i>
                <p>+62 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="section-contact-right">
            <h1>Send Us A Message</h1>
            <form action="">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="fullname"
              />
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="phone"
              />
              <textarea
                type="text"
                name="fullname"
                id="fullname"
                rows="6"
                placeholder="your message"
              ></textarea>
              <button className="btn btn-send">SEND</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
