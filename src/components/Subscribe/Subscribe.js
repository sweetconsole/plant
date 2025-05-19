import "./Subscribe.css"
import React from 'react';
import Title from "../Title/Title";
import Plant from '../../assets/subscribe.png'

const Subscribe = () => {
  return (
     <div className="subscribe">
        <div className="subscribe-info">
           <Title text="Subscribe Our Newsletter" fontSize="40" />
           <p className="subscribe-text Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus. </p>

           <form className="subscribe-form">
               <input className="subscribe-input" type="email" placeholder="Enter mail..." />
               <button className="subscribe-button">Subscribe</button>
           </form>
        </div>

        <img className="subscribe-image" src={Plant} alt="subscribe-plant" />
     </div>
  );
};

export default Subscribe;
