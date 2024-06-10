import React, { useEffect } from 'react';
import Slider from 'react-slick';
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

  const mentors = [
    { id: 1, imgSrc: '/src/Components/Asset/sponsor.png'},
    { id: 2, imgSrc: '/src/Components/Asset/sponsor4.png'},
    { id: 3, imgSrc: '/src/Components/Asset/sponsor2.png'},
  ];

  return (
    <div className="mentor-slider-container">
      <h2>Our sponsor</h2>
      <Slider {...settings}>
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-slide" data-aos="fade-up">
            <img src={mentor.imgSrc} alt={`Mentor ${mentor.id}`} className="mentor-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MentorSlider;
