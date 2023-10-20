import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };


      





  return (
    <Slider {...settings}>
      <div>
        <img src="https://i.ibb.co/wBXx7Sm/Rectangle-1.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/Sv9P11c/Rectangle-2.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/WsVd5r7/Rectangle-3.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/98kFq9f/Rectangle-4.webp" alt="" />
      </div>
     
    </Slider>
  )
}
