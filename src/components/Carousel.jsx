import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import leftArrow from '../assets/images/leftArrow.png';
import rightArrow from '../assets/images/rightArrow.png';

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 -mx-7 z-10"
    onClick={onClick}
  >
    <img src={leftArrow} alt="Prev" className="w-10 h-10" />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute -bottom-5 right-1/2 transform translate-x-1/2 -mx-7 z-10"
    onClick={onClick}
  >
    <img src={rightArrow} alt="Next" className="w-10 h-10" />
  </button>
);

const Carousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640, // Mobile
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative max-w-7xl mx-auto pb-10">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="p-4">
            <img src={item.src} className=""/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
