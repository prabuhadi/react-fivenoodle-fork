import React from "react";
import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import "../../../assets/css/home.css";
import "../../../assets/css/about.css";
import imgKoki from "../../../assets/img/koki.jpg";
import imgJas from "../../../assets/img/jas.jpg";
const index = () => {
  return (
    <>
      <Navbar />
      <div className="content-section">
        <div className="tittle">ABOUT US</div>
        <div className="content">
          <div className="isi-content">
            <h2>Profile</h2>
            <p>
              Fivenoodle is a restaurant that provides a healthy noodle food
              menu that was born starting from a home business from the owner of
              fivenoodle which has developed rapidly into a healthy noodle food
              restaurant until now. We provide a menu of various kinds of
              processed noodles made from vegetables and other ingredients.
            </p>
            <p>
              We know you're busy, so we're making the world's best food even
              faster. Meet Fivenoodle: the food delivery service that brings the
              freshest cooked noodles right to your doorstep. You can choose
              from a variety of noodles with quality ingredients and healthy for
              diet. We also offer local, organic, and delicious tasting dishes.
              And we never send any waste back to your kitchen.
            </p>
            <p>
              The best way to eat noodles has arrived! Fivenoodle is the world's
              first technology company to serve healthy noodles right in front
              of your door. We're committed to delivering fresh, delicious, and
              healthy food for every person on the planet. You can choose from
              various offerings, from zero-waste organic gluten-free noodles to
              Vietnamese pho, with a variety of healthy ingredients. Join us!
            </p>

            <button href="" className="tbl">
              Hubungi
            </button>
            <br />

            <div className="profil"></div>
          </div>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
          />
        </div>

        <div className="tittle2">PROFILE DIREKSI</div>
        <div className="card-profile">
          <article className="card-profile-item">
            <img className="img" src={imgJas} alt="" />
            <div className="konten">
              <h2>stefan</h2>
              <h3>owner</h3>
              <p>Merupakan owner dari foodnoodle</p>
            </div>
          </article>
          <article className="card-profile-item">
            <img className="img" src={imgJas} alt="" />
            <div className="konten">
              <h2>Roy</h2>
              <h3>Manager</h3>
              <p>Merupakan Manager dari foodnoodle</p>
            </div>
          </article>
          <article className="card-profile-item">
            <img className="img" src={imgKoki} alt="" />
            <div className="konten">
              <h2>Srono</h2>
              <h3>Kepala Chef</h3>
              <p>Merupakan Kepala chef dari foodnoodle</p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
