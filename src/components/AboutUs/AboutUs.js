import "./AboutUs.css"
import React from 'react';
import image from "../../assets/about-us.png"
import Title from "../Title/Title";
import Button from "../Button/Button";

const AboutUs = () => {
  return (
     <div className="about-us">
        <div className="about-us-image">
           <div className="about-us-background" />
           <img src={image} alt="logo" />
        </div>

        <div className="about-us-info">
            <p className="about-us-suptitle">About Us</p>
            <Title text="Continue to Develop to Became Global Company" fontSize="40"/>
            <p className="about-us-words Text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in 
               erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing 
               elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla 
               elementum fringilla at.
            </p>
            <p className="about-us-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.</p>
            <Button text="Read More" font_size="18" padding="16px 32px" />
        </div>
     </div>
  )
}

export default AboutUs;
