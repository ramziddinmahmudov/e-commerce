import React from "react";
import "./Hero.css";
import hand_icon from "../Asset/hand_icon.png";
import arrow_icon from "../Asset/arrow.png";
import hero_img from "../Asset/iphone14.png"

const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up">
      <div className="hero-left">
        <h2>JUST SUPER SHOP</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
          <img src={hero_img} alt="" className="hero_image1"/>
      </div>
    </div>
  );
};

export default Hero;
