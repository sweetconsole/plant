import { type FC } from "react"
import { Text, Title } from "../ui"
import Post from "./Post/Post.tsx"
import { gallery } from "./post.data.ts"
import styles from "./Follow.module.scss"

const Follow: FC = () => {
	return (
		<div className={styles.block}>
			<Title text="Мы в Instagram" fontSize="48" />

			<Text
				style={styles.text}
				text="Подписавшись на наш Instagram, вы узнаете свежие идеи дизайна, полезные советы по уходу, эксклюзивные скидки и новинки"
			></Text>

			<div className={styles.gallery}>
				{gallery.map((image, key) => (
					<Post key={key} image={image} />
				))}
			</div>
		</div>
	)
}

export default Follow
