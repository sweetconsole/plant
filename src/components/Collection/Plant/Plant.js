import styles from "./Plant.module.scss"

const Plant = ({image, backgroundColor}) => {
	let style = {
		backgroundColor: backgroundColor,
	}

	return (
		<div className={styles.plant} style={style}>
			<img className={styles.image} src={image} alt="Цветок" />
		</div>
	);
};

export default Plant;
