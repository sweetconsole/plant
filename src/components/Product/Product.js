import "./Product.css"
import React from 'react';
import ProdutItem from "./ProdutItem";
import Title from "../Title/Title";
import Button from "../Button/Button";
import ImageOne from '../../assets/product/1.png'
import ImageTwo from '../../assets/product/2.png'
import ImageThree from '../../assets/product/3.png'
import ImageFour from '../../assets/product/4.png'

const Product = () => {
   return (
      <div className="product">
            <Title text="Our Best Product" fontSize="40" />

            <div className="product-categories">
               <p className="product-category product-category-active">New Plants</p>
               <p className="product-category">New Arrivals</p>
               <p className="product-category">Sale</p>
            </div>

            <div className="product-items">
               <ProdutItem image={ImageOne} name="Outdoor Plant" price="50 $" backgroundColor="#EAF2E5" />
               <ProdutItem image={ImageTwo} name="Monstera Plant" price="35 $" backgroundColor="#F0EBE6" />
               <ProdutItem image={ImageThree} name="Pottel Plant" price="45 $" backgroundColor="#E2ECE4" />
               <ProdutItem image={ImageFour} name="Indoor Plant" price="25 $" backgroundColor="#E7EEED" />
            </div>

            <Button text="View All" font_size="18" padding="16px 32px" />
      </div>
   );
};

export default Product;
