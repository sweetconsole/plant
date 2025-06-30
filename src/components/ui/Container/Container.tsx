import { type FC, type JSX } from "react"
import styles from "./Container.module.scss"

interface IContainerProps {
	children: JSX.Element | JSX.Element[]
}

const Container: FC<IContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container