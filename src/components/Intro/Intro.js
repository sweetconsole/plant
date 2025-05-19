import "./Intro.css"
import React from 'react';
import image from '../../assets/intro.png'
import Leaves from '../../assets/leaves.png'
import IntroItem from "./IntroItem/IntroItem";
import Button from "../Button/Button";

const Intro = () => {
    return (
      <div className="intro">
         <img className="intro-leaves" src={Leaves} alt="Листики" />

         <div className="intro-content">
            <h1 className="intro-title">Growing Beautiful Plants at Home</h1>
            <p className="Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at 
                  in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>
            <Button text="Learn More" font_size="18" padding="15px 30px" />

            <div className="intro-info">
               <IntroItem meaning="2000+" name="Delivery" />
               <IntroItem meaning="1200+" name="Customers" />
               <IntroItem meaning="1000+" name="Product" />
            </div>
         </div>

         <img className="intro-image" src={image} alt="Цветок"/>
      </div>
   );
};

export default Intro;
