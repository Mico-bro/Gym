import React from 'react';
import {MenuList} from '../Menulisters/MenuList';
import MenuItem from '../components/MenuItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/sport/1.jpg';
import slide_image_2 from '../assets/sport/2.jpg';
import slide_image_3 from '../assets/sport/3.jpg';
import slide_image_4 from '../assets/sport/4.jpg';
import slide_image_5 from '../assets/sport/5.jpg';
import slide_image_6 from '../assets/sport/6.jpg';
import slide_image_7 from '../assets/sport/7.jpg';
import slide_image_8 from '../assets/sport/8.jpg';
import slide_image_9 from '../assets/sport/9.jpg';
import slide_image_10 from '../assets/sport/10.jpg';
import slide_image_11 from '../assets/sport/11.jpg';
import slide_image_12 from '../assets/sport/12.jpg';
import slide_image_13 from '../assets/sport/13.jpg';
import slide_image_14 from '../assets/sport/14.jpg';
import slide_image_15 from '../assets/sport/15.jpg';
import slide_image_16 from '../assets/sport/16.jpg';


import './Menu.css';

function Menu() {
  return (
    
      <div>
      
      <div className="container">
      <h1 className="heading">Pro-Gym</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="slide_image" />
        </SwiperSlide>

        

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    <br/>
    <br/>
    <br/>

    <div className='menu'>
    <h1 className='menuTitle'>categories</h1><br/>
      <br/>    
      <div className='menuList'>{MenuList.map((menuItem, key)=>{
        return <MenuItem 
        key={key}
        image={menuItem.image} 
        name={menuItem.name} 
        price={menuItem.price} />
      })}
              
      </div>
    
    </div>
    <div className='bttt'>
    <Link to='/contact'>
     <button>Book now</button>
     </Link>
     </div>
    </div>
  )
}

export default Menu;




