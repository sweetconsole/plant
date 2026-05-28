import type {FC} from "react";
import type {CollectionType} from "../collection.data.ts";
import styles from "./Plant.module.scss"

const Plant: FC<CollectionType> = ({image, color}) => {
	return (
		<div className={styles.plant} style={{backgroundColor: color}}>
			<img className={styles.image} width="195" height="195" src={image} alt="Цветок" loading="lazy" />
		</div>
	);
};

export default Plant;
