import "./IntroItem.css"
import React from 'react';

const IntroItem = ({
   meaning,
   name
}) => {
  return (
   <div className="intro-item">
      <p className="intro-meaning">{meaning}</p>
      <p className="intro-name">{name}</p> 
   </div>
  );
};

export default IntroItem;
