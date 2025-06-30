import { Link as ScrollLink } from "react-scroll"
import styles from "./Link.module.scss"

const Link = ({link, title}) => {
	return (
		<ScrollLink className={styles.link}
								to={link}
								offset={-142}
								smooth={true}
								duration={500}>
			{title}
		</ScrollLink>
	)
}

export default Link
