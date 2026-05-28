import { type FC, useState } from "react"
import type { ProductType } from "../products.data.ts"
import styles from "./Product.module.scss"

const Product: FC<ProductType> = ({ image, title, price, color }) => {
	const [hover, setHover] = useState(false)

	const handleMouseEnter = () => {
		setHover(true)
	}

	const handleMouseLeave = () => {
		setHover(false)
	}

	return (
		<div
			className={styles.product}
			style={{
				backgroundColor: color,
				boxShadow: hover ? `0 5px 15px 5px ${color}` : ""
			}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.image_container}>
				<img src={image} alt={title} loading="lazy" />
			</div>
			<p className={styles.name}>{title}</p>

			<div className={styles.stars}>
				{Array(5)
					.fill(0)
					.map(index => (
						<img
							className={styles.star}
							src="/images/product/star.png"
							width="17"
							height="16"
							alt="Звезда"
							loading="lazy"
							key={index}
						/>
					))}
			</div>

			<p className={styles.price}>{price} ₽</p>
		</div>
	)
}

export default Product
