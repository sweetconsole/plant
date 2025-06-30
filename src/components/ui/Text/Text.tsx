import { type FC } from "react"
import styles from "./Text.module.scss"

interface ITextProps {
	text: string
	style?: string
}

const Text: FC<ITextProps> = ({text, style}) => {
	return (
		<p className={[styles.text, style].join(" ")}>{text}</p>
	)
}

export default Text