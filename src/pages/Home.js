import React from 'react';
import Intro from '../components/Intro/Intro';
import Collection from '../components/Collection/Collection';
import AboutUs from '../components/AboutUs/AboutUs';
import Product from '../components/Product/Product';
import Reviews from '../components/Reviews/Reviews';
import Subscribe from '../components/Subscribe/Subscribe';
import Follow from '../components/Follow/Follow';

const Home = () => {
  return (
      <div>
         <Intro />
         <Collection />
         <AboutUs />
         <Product />
         <Reviews />
         <Subscribe />
         <Follow />
      </div>
  )
}

export default Home;
