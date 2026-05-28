import { type FC } from "react"
import { clsx } from "clsx"
import { Title, Button } from "../ui"
import Product from "./Product/Product.tsx"
import { products } from "./products.data.ts"
import styles from "./Products.module.scss"

const Products: FC = () => {
	return (
		<div className={styles.block} id="products">
			<Title text="Лушие растения" fontSize="40" />

			<div className={styles.categories}>
				<p className={clsx(styles.category, styles.category_active)}>Новинки</p>
				<p className={styles.category}>Новые поступления</p>
				<p className={styles.category}>Распродажа</p>
			</div>

			<div className={styles.products}>
				{products.map((product, key) => (
					<Product key={key} {...product} />
				))}
			</div>

			<Button text="Смотреть все" fontSize="18" padding="16px 32px" />
		</div>
	)
}

export default Products
