import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AvatarCarusel.css';

export const AvatarCarusel = ({ employees, selcetEmlpoyee }) => {

  const settings = {
    className: 'avatar-carusel',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 7,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 5,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      }
    ]

  }


  return (
    <div className='carusel-container'>
      <Slider {...settings}>
        {employees.map(e => (
          <div key={e.id} className='slide'onClick={() => selcetEmlpoyee(e.id)}>
            <img src={e.avatar} className='slide-image' alt='avatar'></img>
          </div>
        ))}
      </Slider>
    </div>
  )
}