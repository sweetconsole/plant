import type {FC} from "react";
import type {PlantCollectionType} from "../collection.type.ts";
import styles from "./Plant.module.scss"

const Plant: FC<PlantCollectionType> = ({image, color}) => {
	return (
		<div className={styles.plant} style={{backgroundColor: color}}>
			<img className={styles.image} width="195" height="195" src={image} alt="Plant" loading="lazy" />
		</div>
	);
};

export default Plant;
