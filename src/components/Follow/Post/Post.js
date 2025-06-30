import Instagram from "../../../assets/images/follow/Instagram.png"
import styles from "./Post.module.scss"

const Post = ({image}) => {
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
