import React from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import "../../../assets/css/home.css";
import "../../../assets/css/blog.css";
import img1 from "../../../assets/img/blog/img1.jpg";
import img2 from "../../../assets/img/blog/img2.jpg";
import img3 from "../../../assets/img/blog/img3.jpg";
import img4 from "../../../assets/img/blog/img4.jpg";
import img5 from "../../../assets/img/blog/img5.jpg";

const index = () => {
  return (
    <>
      <Navbar />
      <section className="section-blog">
        <div className="blog-container">
          <div className="blog-post-container">
            <div className="post-container">
              <div className="post-content-container">
                <div className="post thumb">
                  <img
                    className="post-img"
                    src={img1}
                    alt="Asinan Kelengkeng"
                  />
                </div>
                <div className="post-details">
                  <a className="post link" href="#">
                    <h4 className="post title">
                      RESEP ASINAN KELENGKENG KIAMBOY KEKINIAN – ASEM MANIS
                      SEGER
                    </h4>
                  </a>
                </div>
                <p className="post paragraph">
                  Yang manis, yang asem, yang pedes, yang seger!!Asinan atau
                  manisan kelengkeng kiamboy yang kekinian ternyata super
                  praktis dan gampang dibuat dengan bahan yang simple dan
                  rasanya pun sangat enak. Yuk cobain!
                </p>
                <ul className="post-tags">
                  <li className="tags">
                    <a href="#">Recipe</a>,
                  </li>
                  <li className="tags">
                    <a href="#">Dessert</a>
                  </li>
                </ul>
              </div>
              <div className="post-content-container">
                <div className="post thumb">
                  <img className="post-img" src={img2} alt="Korean Toast" />
                </div>
                <div className="post-details">
                  <a className="post link" href="#">
                    <h4 className="post title">
                      [RECIPE] KOREAN MAYO EGG TOAST
                    </h4>
                  </a>
                </div>
                <p className="post paragraph">
                  MAYO EGG TOAST is one of our favorite easy cook recipe
                  inspired by Korean tv show called Fun-staurant. It is very
                  easy and delicious! Here is the recipe.
                </p>
                <ul className="post-tags">
                  <li className="tags">
                    <a href="#">Recipe</a>,
                  </li>
                  <li className="tags">
                    <a href="#">Toast</a>
                  </li>
                </ul>
              </div>
              <div className="post-content-container">
                <div className="post thumb">
                  <img className="post-img" src={img3} alt="Ajitsuke Tamago" />
                </div>
                <div className="post-details">
                  <a className="post link" href="#">
                    <h4 className="post title">
                      [RECIPE] AJITSUKE TAMAGO/ RAMEN EGG (AJITAMA)
                    </h4>
                  </a>
                </div>
                <p className="post paragraph">
                  Hello, as requested, here you go the recipe for Japanese
                  Marinated/ Seasoned Soft Boiled Egg or Ramen Egg or Ajitsuke
                  Tamago or Ajitama.
                </p>
                <ul className="post-tags">
                  <li className="tags">
                    <a href="#">Recipe</a>,
                  </li>
                  <li className="tags">
                    <a href="#">Japanese Food</a>
                  </li>
                </ul>
              </div>
              <div className="post-content-container">
                <div className="post thumb">
                  <img
                    className="post-img"
                    src={img4}
                    alt="Asinan Kelengkeng"
                  />
                </div>
                <div className="post-details">
                  <a className="post link" href="#">
                    <h4 className="post title">HALLOWEEN POCKY DECO</h4>
                  </a>
                </div>
                <p className="post paragraph">
                  Hello October!! Who`s excited for Halloween?!! To celebrate
                  the upcoming Halloween, AnakJajan attended Halloween Party and
                  Pocky Deco event held by Glico Pocky and Cosmo Club some time
                  ago.
                </p>
                <ul className="post-tags">
                  <li className="tags">
                    <a href="#">Lifestyle</a>,
                  </li>
                  <li className="tags">
                    <a href="#">Decoration</a>
                  </li>
                  <li className="tags">
                    <a href="#">Halloween</a>
                  </li>
                </ul>
              </div>
              <div className="post-content-container">
                <div className="post thumb">
                  <img
                    className="post-img"
                    src={img5}
                    alt="Apple Tart (Nastar)"
                  />
                </div>
                <div className="post-details">
                  <a className="post link" href="#">
                    <h4 className="post title">
                      [RECIPE] KRAFT CHEESE MINI APPLE TART
                    </h4>
                  </a>
                </div>
                <p className="post paragraph">
                  Eid Mubarak is just around the corner. Tasty cake or cookie
                  treats are one of the must have items during special day don’t
                  you agree? What is your must have sweet treat during special
                  day just like Eid Mubarak
                </p>
                <ul className="post-tags">
                  <li className="tags">
                    <a href="#">Recipe</a>,
                  </li>
                  <li className="tags">
                    <a href="#">Nastar</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="post-page">
              <ul className="page-container">
                <li className="page">
                  <a href="#">1</a>
                </li>
                <li className="page">
                  <a href="#">2</a>
                </li>
                <li className="page">
                  <a href="#">3</a>
                </li>
                <li className="page">
                  <a href="#">&gt;</a>
                </li>
                <li className="page">
                  <a href="#">&gt;&gt;&gt;</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-sidebar-container">
            <div className="sidebar top">
              <div className="search-container">
                <form className="form-search" method="GET" action="#">
                  <input
                    className="search-box"
                    type="text"
                    placeholder="Search..."
                    required
                    name="q"
                    autocomplete="on"
                  />
                  <input
                    id="btn"
                    className="search-button"
                    type="button"
                    value="Search"
                  />
                </form>
              </div>
            </div>
            <div className="sidebar center">
              <div className="recent-post-container">
                <h2 className="subheading">Recent Posts</h2>
                <div className="recent-post-list-container">
                  <ul className="post-list">
                    <li className="list">
                      <a href="#">
                        <h5 className="list paragraph">
                          [RECIPE] HOMEMADE GARLIC BUTTERFEBRUARY
                        </h5>
                        <span className="list info">FEBRUARY 15, 2021</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#">
                        <h5 className="list paragraph">
                          URBAN FARM PIK – GOLF ISLAND PANTAI INDAH KAPUK,
                          JAKARTA
                        </h5>
                        <br />
                        <span className="list info">MAY 18, 2021</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#">
                        <h5 className="list paragraph">
                          CARBON RESTAURANT – MD PLACE, SETIABUDI, JAKARTA
                        </h5>
                        <br />
                        <span className="list info">MAY 19, 2021</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sidebar bottom">
              <div className="categories-container">
                <h2 className="subheading">Categories</h2>
                <ul className="categories list">
                  <li className="category">
                    <a href="#">Lifestyle</a>
                  </li>
                  <li className="category">
                    <a href="#">Health</a>
                  </li>
                  <li className="category">
                    <a href="#">Food</a>
                  </li>
                  <li className="category">
                    <a href="#">Travel</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
