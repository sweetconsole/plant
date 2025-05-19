import "./Button.css"
import React from 'react';

const Button = ({
   text,
   font_size,
   padding,
}) => {

   let style = {
      fontSize: font_size + "px",
      padding: padding,
   }

   return (
      <button className="Button" style={style}>{text}</button>
   );
};

export default Button;
