import { type FC } from "react"
import styles from "./Feedback.module.scss"

const Feedback: FC = () => {
	return (
		<div className={styles.feedback}>
			<div className={styles.container}>
				<div className={styles.author}>
					<div
						className={styles.author_photo}
						style={{ backgroundImage: `url(/images/reviews/avatar.png)` }}
					/>

					<div>
						<p className={styles.author_name}>Михаил Томпсон</p>
						<p className={styles.author_job}>Дизайнер интерьеров</p>
					</div>

					<img
						className={styles.marks}
						src="/images/reviews/marks.png"
						width="40"
						height="40"
						alt="``"
					/>
				</div>

				<p className={styles.text}>
					Ваш магазин впечатлил вас отличным выбором растений, полезными
					советами и качественной доставкой. В доме сразу стало уютнее.
					Рекомендую всем!
				</p>

				<div className={styles.buttons}>
					<button
						className={styles.button}
						aria-label="Предыдущий отзыв"
					></button>
					<button
						className={styles.button}
						aria-label="Следующий отзыв"
					></button>
				</div>
			</div>
		</div>
	)
}

export default Feedback
