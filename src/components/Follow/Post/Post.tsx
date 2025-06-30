import { type FC } from "react"
import Instagram from "../../../assets/images/follow/Instagram.png"
import styles from "./Post.module.scss"

interface IPostProps {
	image: string
}

const Post: FC<IPostProps> = ({image}) => {
	return (
		<div className={styles.post}>
			<img className={styles.image} src={image} alt="Follow" />

			<div className={styles.network}>
				<img className={styles.instagram} src={Instagram} alt="Instagram" />
			</div>
		</div>
	);
};

export default Post;
