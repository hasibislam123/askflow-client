import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import OurServiceSEC from '../OurServiceSEC/OurServiceSEC';
import Brands from '../Brands/Brands';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Reviews from '../Reviews/Reviews';
import Section5 from '../Section5/Section5';


const reviewsPromise = fetch('/reviews.json')
   .then(res => res.json());
   

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Section1></Section1>
         <OurServiceSEC></OurServiceSEC>
         <Brands></Brands>
         <hr className="border-dashed border-t-2 border-gray-300 mb-4 mt-4" />
         <Section3></Section3>
         <hr className="border-dashed border-t-2 border-gray-300 mb-4 mt-4" />
         <Section4></Section4>
         <Reviews reviewsPromise={reviewsPromise}></Reviews>
         <Section5></Section5>

      </div>
   );
};

export default Home;