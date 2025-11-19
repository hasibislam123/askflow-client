import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon.png'
import amazon_vector from '../../../assets/brands/amazon_vector.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const Brands = () => {

   const brandLogo = [casio, amazon, amazon_vector, moonstar, randstad, star, start_people]
   return (
      
      
      <Swiper
         className='my-5'
         loop={true}
         slidesPerView={4}
         centeredSlides={true}
         spaceBetween={30}
         grabCursor={true}
         autoplay={{
            delay: 1500,
            disableOnInteraction: false,
         }}
         modules={[Autoplay]}
      >
        
         
         {
            brandLogo.map((logo, index) => <SwiperSlide key={index}>
               <img src={logo} alt="" />
            </SwiperSlide>)
         }

      </Swiper>
   );
};

export default Brands;