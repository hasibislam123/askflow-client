import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer_top from '../../../assets/customer-top.png'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
const Reviews = ({ reviewsPromise }) => {
   const reviews = use(reviewsPromise)
   console.log(reviews)
   return (
      <div className=' mt-10'>
         <img className='mx-auto' src={customer_top} alt="" />
         <div className='mt-7'>
            <h3 className='text-[40px] font-extrabold  text-center What our customers are sayings text-secondary'>What our customers are sayings</h3>
            <p className='text-center text-[#606060]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper <br /> alignment, reduce pain, and strengthen your body with ease!</p>
         </div>
         <Swiper

            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
               rotate: 40,
               stretch: '50%',
               depth: 150,
               modifier: 1,
               scale: 0.99,
               slideShadows: true,
            }}
            autoplay={{
               delay:2000,
               disableOnInteraction: false
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper mt-7"
         >
            {
               reviews.map(review =>
                  <SwiperSlide key={review.id}>
                     <ReviewCard review={review} ></ReviewCard>
                  </SwiperSlide>)
            }
         </Swiper>

      </div>
   );
};

export default Reviews;