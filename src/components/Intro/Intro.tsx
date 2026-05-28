import { Button, Text } from "../ui"
import Counter from "./Counter/Counter.tsx"
import { counters } from "./intro.data.ts"
import styles from "./Intro.module.scss"

const Intro = () => {
	return (
		<div className={styles.intro}>
			<img
				className={styles.leaves}
				src="/images/leaves.png"
				width="234"
				height="247"
				alt=""
			/>

			<div className={styles.inner}>
				<h1 className={styles.title}>
					Выращиваем красивые растения для вашего дома
				</h1>
				<Text text="Наш магазин комнатных растений — это путешествие в мир сочной зелени и ярких красок. Мы отобрали каждый экземпляр, чтобы вы получили максимум комфорта и эстетического удовольствия." />
				<Button text="Подробнее" fontSize="18" padding="15px 30px" />

				<div className={styles.info}>
					{counters.map((counter, key) => (
						<Counter key={key} {...counter} />
					))}
				</div>
			</div>

			<img
				className={styles.image}
				src="/images/intro.png"
				width="560"
				height="720"
				alt=""
			/>
		</div>
	)
}

export default Intro
