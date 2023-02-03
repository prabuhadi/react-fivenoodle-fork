import React from "react";
import Logo from "./../../assets/img/logo/5noodle-logo.png";
import { IonIcon } from "react-ion-icon";

export function footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container grid grid--footer">
          <div class="logo-col">
            <a href="#">
              <img class="footer-logo" src={Logo} alt="fivenoodle logo" />
            </a>
            <div>
              <IonIcon class="social-icon" name="logo-instagram" />
            </div>

            <ul class="social-links">
              <li>
                <a class="footer-link" href="#">
                  <IonIcon class="social-icon" name="logo-instagram" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  <IonIcon class="social-icon" name="logo-facebook" />
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  <IonIcon class="social-icon" name="logo-twitter" />
                </a>
              </li>
            </ul>

            <p class="copyright">
              Copyright &copy; 2023 by Fivenoodle, Inc. All right reserved.
            </p>
          </div>
          <div class="address-col">
            <p class="footer-heading">Contact Us</p>
            <address class="contacts">
              <p class="address">
                Jl Jend Gatot Subroto Kav 12-13 Ged Putra Kalimantan, DKI
                Jakarta
              </p>
              <p>
                <a class="footer-link" href="tel:021-522-2926">
                  021-522-2926
                </a>
                <br />
                <a class="footer-link" href="mailto:hello@fivenoodle.com">
                  hello@fivenoodle.com
                </a>
              </p>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Account</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Create Account
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS App
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android App
                </a>
              </li>
            </ul>
          </nav>
          <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  About Fivenoodle
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Our Partnership
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Our Menu
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default footer;
