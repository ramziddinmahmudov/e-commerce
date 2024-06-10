import React, { useEffect } from 'react';
import Slider from 'react-slick';
import img1 from "/src/Components/Asset/sponsor.png"
import img2 from "/src/Components/Asset/sponsor4.png"
import img3 from "/src/Components/Asset/sponsor2.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slayder.css'; 

const MentorSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          arrows: false  
      }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: false,
          arrows: false  // Remove navigation arrows
        }
      }
    ]
  };


  return (
    <div className="mentor-slider-container">
      <h2>Our sponsor</h2>
      <Slider {...settings}>
          <div className="mentor-slide" data-aos="fade-up">
            <img src={img1} className="mentor-image" />
          </div>
          <div className="mentor-slide" data-aos="fade-up">
            <img src={img2} className="mentor-image" />
          </div>
          <div className="mentor-slide" data-aos="fade-up">
            <img src={img3} className="mentor-image" />
          </div>
      </Slider>
    </div>
  );
};

export default MentorSlider;
