import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Chapter from "./Chapter/Chapter";
import styles from "./Footer.module.scss"
import Text from "../ui/Text/Text";

const Footer = () => {
	const linkNavigation = ["Home", "About", "Help & Support", "Product"]
	const linkAboutUs = ["Contact", "Address", "Blog", "About Us"]
	const linkHelp = ["Coustomers Services", "FAQs", "We Are Hiring", "Returns"]

	return (
		<div className={styles.footer}>
			<div className={styles.info}>
				<p className={styles.logo}>Plant</p>
				<Text style={styles.text} text="Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh posuere duis eu non sit integer at placerat amet." />

				<a className={styles.network} href="/">
					<img src={Facebook} alt="Facebook" />
				</a>

				<a className={styles.network} href="/">
					<img src={Twitter} alt="Twitter" />
				</a>

				<a className={styles.network} href="/">
					<img src={Instagram} alt="Instagram" />
				</a>
			</div>

			<div className={styles.chapters}>
				<Chapter title="Navigation" links={linkNavigation} />
				<Chapter title="About Us" links={linkAboutUs} />
				<Chapter title="Help" links={linkHelp} />
			</div>
		</div>
	);
};

export default Footer;
