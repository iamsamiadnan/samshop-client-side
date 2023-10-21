
import Slider from 'react-slick';

export default function AdsBanner() {
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
        <img src="https://i.ibb.co/VxS5SYQ/Rectangle-1.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/5xGp9XJ/Rectangle-2.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/yqDDGc5/Rectangle-3.webp" alt="" />
      </div>

      <div>
        <img src="https://i.ibb.co/QFRk60f/Rectangle-4.webp" alt="" />
      </div>
     
    </Slider>
  )
}
