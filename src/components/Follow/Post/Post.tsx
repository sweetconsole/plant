import { type FC } from "react"
import Instagram from "../../../assets/images/follow/instagram.svg"
import styles from "./Post.module.scss"

interface IPostProps {
	image: string
}

const Post: FC<IPostProps> = ({image}) => {
	return (
		<div className={styles.post}>
			<img className={styles.image} src={image} width="230" height="230" alt="Follow" loading="lazy" />

			<div className={styles.network}>
				<img className={styles.instagram} src={Instagram}  width="80" height="80" alt="Instagram" loading="lazy" />
			</div>
		</div>
	);
};

export default Post;
