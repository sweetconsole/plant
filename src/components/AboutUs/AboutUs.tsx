import { type FC } from "react"
import { Title, Button, Text } from "../ui"
import styles from "./AboutUs.module.scss"

const AboutUs: FC = () => {
	return (
		<div className={styles.block} id="about-us">
			<div className={styles.image_container}>
				<div className={styles.image_background} />
				<img
					className={styles.image}
					src="/images/about-us.png"
					width="446"
					height="440"
					alt=""
					loading="lazy"
				/>
			</div>

			<div className={styles.info}>
				<p className={styles.suptitle}>О нас</p>
				<Title
					text="Развиваемся, чтобы стать глобальной компанией"
					fontSize="40"
				/>

				<Text
					style={styles.words}
					text="Наш уютный магазин комнатных растений открыт для всех, кто хочет окунуться в мир зелени и красоты. У нас огромный выбор декоративных растений для любого интерьера — от минимализма до классики и загородного дома. Мы дарим растения, которые преображают комнату."
				/>

				<p className={styles.text}>
					Дарим дому — зелень, атмосфере — уют, сердцам — улыбки.
				</p>

				<Button text="Подробнее" fontSize="18" padding="16px 32px" />
			</div>
		</div>
	)
}

export default AboutUs
