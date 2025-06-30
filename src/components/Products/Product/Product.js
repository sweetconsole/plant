import Star from '../../../assets/images/product/star.png'
import styles from "./Product.module.scss"

const Product = ({image, name, price, backgroundColor}) => {
   return (
      <div className={styles.product} style={{backgroundColor: backgroundColor}}>
         <div className={styles.image_container}>
           <img src={image} alt="Error load" />
         </div>
         <p className={styles.name}>{name}</p>

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
