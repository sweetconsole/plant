import { type FC } from "react";
import { Title, Button } from "../ui";
import Product from "./Product/Product.tsx";
import { products } from "./products.data.ts";
import styles from "./Products.module.scss"


const Products: FC = () => {
  return (
    <div className={styles.block} id="products">
      <Title text="Our Best Products" fontSize="40" />

      <div className={styles.categories}>
        <p className={[styles.category, styles.category_active].join(" ")}>New Plants</p>
        <p className={styles.category}>New Arrivals</p>
        <p className={styles.category}>Sale</p>
      </div>

      <div className={styles.products}>
        {products.map((product, key) => (
          <Product key={key} {...product} />
        ))}
      </div>

      <Button text="View All" font_size="18" padding="16px 32px" />
    </div>
  );
};

export default Products;
