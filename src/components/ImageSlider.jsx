import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.png" alt="Image 1" />
      </div>
      <div>
        <img src="image2.png" alt="Image 2" />
      </div>
      <div>
        <img src="image3.png" alt="Image 3" />
      </div>
      <div>
        <img src="image4.png" alt="Image 4" />
      </div>
      <div>
        <img src="image5.png" alt="Image 5" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
