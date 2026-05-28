import { type FC } from "react"
import { Text, Title } from "../ui"
import Feedback from "./Feedback/Feedback.tsx"
import styles from "./Reviews.module.scss"

const Reviews: FC = () => {
	return (
		<div className={styles.block} id="reviews">
			<div className={styles.info}>
				<Title text="Что говорят наши клиенты" fontSize="40" />
				<Text
					style={styles.text}
					text="Нас выбирают за большой выбор здоровых растений, консультации, удобную доставку, высокое качество и честные цены."
				/>

				<Feedback />
			</div>

			<img
				className={styles.image}
				src="/images/reviews/image.png"
				width="600"
				height="430"
				alt=""
				loading="lazy"
			/>
		</div>
	)
}

export default Reviews
