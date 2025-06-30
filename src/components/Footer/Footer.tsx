import { Text } from "../ui";
import Chapter from "./Chapter/Chapter.tsx";
import { networks, chapters } from "./footer.data.ts";
import styles from "./Footer.module.scss"


const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.info}>
				<p className={styles.logo}>Plant</p>
				<Text style={styles.text} text="Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet." />

				{networks.map((network, key) => (
					<a className={styles.network} href={network.link} target="_blank" key={key} rel="noopener noreferrer">
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
