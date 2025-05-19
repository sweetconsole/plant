import React from 'react';
import star from '../../assets/product/star.png'

const ProdutItem = ({
   image,
   name,
   price,
   backgroundColor,
}) => {
   let style = {
      backgroundColor: backgroundColor,
   }

   return (
      <div style={style} className="product-item">
         <div className="product-image"><img src={image} alt="icon" /></div>
         <p className="product-name">{name}</p>
         <div className="product-stars">
            <img className="product-star" src={star} alt="star" />
            <img className="product-star" src={star} alt="star" />
            <img className="product-star" src={star} alt="star" />
            <img className="product-star" src={star} alt="star" />
            <img className="product-star" src={star} alt="star" />
         </div>
         <p className="product-price">{price}</p>
      </div>
   );
};

export default ProdutItem;
