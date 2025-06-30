import Product from "./Product/Product";
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import ImageOne from '../../assets/images/product/1.png'
import ImageTwo from '../../assets/images/product/2.png'
import ImageThree from '../../assets/images/product/3.png'
import ImageFour from '../../assets/images/product/4.png'
import styles from "./Products.module.scss"

const Products = () => {
   return (
      <div className={styles.block} id="products">
            <Title text="Our Best Products" fontSize="40" />

            <div className={styles.categories}>
               <p className={[styles.category, styles.category_active].join(" ")}>New Plants</p>
               <p className={styles.category}>New Arrivals</p>
               <p className={styles.category}>Sale</p>
            </div>

            <div className={styles.products}>
               <Product image={ImageOne} name="Outdoor Plant" price="50" backgroundColor="#EAF2E5" />
               <Product image={ImageTwo} name="Monstera Plant" price="35" backgroundColor="#F0EBE6" />
               <Product image={ImageThree} name="Pottel Plant" price="45" backgroundColor="#E2ECE4" />
               <Product image={ImageFour} name="Indoor Plant" price="25" backgroundColor="#E7EEED" />
            </div>

            <Button text="View All" font_size="18" padding="16px 32px" />
      </div>
   );
};

export default Products;
