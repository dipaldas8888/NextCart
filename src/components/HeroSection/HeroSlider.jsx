import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../assets/img/slider-1.png";
import slider2 from "../../assets/img/slider-2.png";
import slider3 from "../../assets/img/slider-3.png";
import slider4 from "../../assets/img/slider-4.png";

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [slider1, slider2, slider3, slider4];

  return (
    <section>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slider ${index + 1}`}
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover "
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
