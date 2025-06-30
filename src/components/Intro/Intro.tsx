import Plant from '../../assets/images/intro.png'
import Leaves from '../../assets/images/leaves.png'
import { Button, Text } from "../ui";
import Counter from "./Counter/Counter.tsx";
import { counters } from "./intro.data.ts";
import styles from "./Intro.module.scss"

const Intro = () => {
  return (
    <div className={styles.intro}>
      <img className={styles.leaves} src={Leaves} alt="Leaves" />

      <div className={styles.inner}>
        <h1 className={styles.title}>Growing Beautiful Plants at Home</h1>
        <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at." />
        <Button text="Learn More" font_size="18" padding="15px 30px" />

        <div className={styles.info}>
          {counters.map((counter, key) => (
            <Counter key={key} {...counter} />
          ))}
        </div>
      </div>

      <img className={styles.image} src={Plant} alt="Plant"/>
    </div>
  );
};

export default Intro;
