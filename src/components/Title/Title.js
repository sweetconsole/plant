import "./Title.css"
import React from 'react';

const Title = ({
   text,
   fontSize,
}) => {
   let style = {
      fontSize: fontSize + "px"
   }

   return (
      <h2 className="Title" style={style}>{text}</h2>
   );
};

export default Title;
