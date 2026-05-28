import { type FC } from "react"
import styles from "./Post.module.scss"

interface IPostProps {
	image: string
}

const Post: FC<IPostProps> = ({ image }) => {
	return (
		<div className={styles.post}>
			<img
				className={styles.image}
				src={image}
				width="230"
				height="230"
				alt=""
				loading="lazy"
			/>

			<a className={styles.network} href="/" aria-label="Открыть наш Instagram">
				<img
					className={styles.instagram}
					src="/images/follow/instagram.svg"
					width="80"
					height="80"
					alt=""
					loading="lazy"
				/>
			</a>
		</div>
	)
}

export default Post
