import { Title } from "../ui"
import Plant from "./Plant/Plant.tsx";
import { collection } from "./collection.data.ts";
import styles from "./Collection.module.scss"

const Collection = () => {
  return (
    <div className={styles.collection} id="collection">
      <div className={styles.info}>
        <Title text="Большая коллекция растений для вас и вашей семьи" fontSize="36" />
        <a className={styles.link} href="/">Вся коллекция</a>
      </div>

      <div className={styles.collections}>
        {collection.map((plant, key) => (
          <Plant key={key} {...plant} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
