import "./Reviews.css"
import React from 'react';
import Title from "../Title/Title";
import Feedback from "./Feedback";
import Image from '../../assets/reviews/image.png'

const Reviews = () => {
   return (
      <div className="reviews">
         <div className="reviews-info">
            <Title text="What Our Customers Says" fontSize="40" />
            <p className="reviews-text Text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in 
               erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>

            <Feedback />
         </div>

         <img className="reviews-image" src={Image} alt="reviews" />
      </div>
   );
};

export default Reviews;
