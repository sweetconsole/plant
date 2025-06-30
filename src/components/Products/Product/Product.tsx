import { type FC, useState } from "react";
import Star from '../../../assets/images/product/star.png'
import { type ProductType } from "../products.type.ts";
import styles from "./Product.module.scss"

const Product: FC<ProductType> = ({image, title, price, color}) => {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <div className={styles.product}
         style={{backgroundColor: color, boxShadow: hover ? `0 5px 15px 5px ${color}` : ""}}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <div className={styles.image_container}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.name}>{title}</p>

      <div className={styles.stars}>
        <img className={styles.star} src={Star} alt="✨" />
        <img className={styles.star} src={Star} alt="✨" />
        <img className={styles.star} src={Star} alt="✨" />
        <img className={styles.star} src={Star} alt="✨" />
        <img className={styles.star} src={Star} alt="✨" />
      </div>

      <p className={styles.price}>${price}</p>
    </div>
  );
};

export default Product;
