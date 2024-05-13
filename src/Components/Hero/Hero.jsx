import React from 'react';
import './Hero.css';
import hand_icon from '../Asset/hand_icon.png';
import arrow_icon from '../Asset/arrow.png';
import Slide from  '../page3/page2.jsx';
import hero_image from '../Asset/All_colours.0.jpg'

const Hero = () => {
  return (
    <div className='hero'>
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
        <Slide/>
    </div>
  )
}

export default Hero
