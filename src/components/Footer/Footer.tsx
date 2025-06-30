import { type FC } from "react"
import { Text } from "../ui";
import Chapter from "./Chapter/Chapter.tsx";
import { networks, chapters } from "./footer.data.ts";
import styles from "./Footer.module.scss"

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.info}>
				<p className={styles.logo}>Plant</p>
				<Text style={styles.text} text="The Green Wonders Store is the inspiration, care and comfort of your home in every plant" />

				{networks.map((network, key) => (
					<a className={styles.network}
						 href={network.link}
						 target="_blank"
						 key={key}
						 rel="noopener noreferrer"
						 aria-label={network.name}>
						<img src={network.image} alt={network.name} />
					</a>
				))}
			</div>

			<div className={styles.chapters}>
				{chapters.map((chapter, key) => (
					<Chapter key={key} {...chapter} />
				))}
			</div>
		</div>
	);
};

export default Footer;
