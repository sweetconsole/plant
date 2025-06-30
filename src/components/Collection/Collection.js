import PlantOne from "../../assets/images/collection/1.png"
import PlantTwo from "../../assets/images/collection/2.png"
import PlantThree from "../../assets/images/collection/3.png"
import Title from "../ui/Title/Title"
import Plant from "./Plant/Plant";
import styles from "./Collection.module.scss"

const Collection = () => {
  return (
     <div className={styles.collection} id="collection">
        <div className={styles.info}>
           <Title text="We have lots of plants collection for you and your family" fontSize="36" />    
           <a className={styles.link} href="/">See all collection</a>
        </div>

        <div className={styles.collections}>
            <Plant image={PlantOne} backgroundColor="#F6EDE8" />
            <Plant image={PlantTwo} backgroundColor="#F0F1F6" />
            <Plant image={PlantThree} backgroundColor="#F6EDE8" />
        </div>
     </div>
  );
};

export default Collection;
