import styles from "./Text.module.scss"

const Text = ({text, style}) => {
	return (
		<p className={[styles.text, style].join(" ")}>{text}</p>
	)
}

export default Text