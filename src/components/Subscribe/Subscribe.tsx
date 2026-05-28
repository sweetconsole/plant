import { type FC } from "react"
import { Text, Title } from "../ui"
import styles from "./Subscribe.module.scss"

const Subscribe: FC = () => {
	return (
		<div className={styles.subscribe} id="subscribe">
			<div className={styles.info}>
				<Title text="Подпишитесь на рассылку" fontSize="40" />
				<Text
					style={styles.text}
					text="В рассылке — советы по уходу, идеи декора, скидки и новинки"
				/>

				<form className={styles.form}>
					<input
						className={styles.input}
						type="email"
						placeholder="Введите e-mail..."
					/>
					<button className={styles.button}>Подписаться</button>
				</form>
			</div>

			<img
				className={styles.image}
				src="/images/subscribe.png"
				width="260"
				height="355"
				alt=""
				loading="lazy"
			/>
		</div>
	)
}

export default Subscribe
