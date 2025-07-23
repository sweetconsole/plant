import Plant from '../../assets/images/intro.png'
import Leaves from '../../assets/images/leaves.png'
import { Button, Text } from "../ui";
import Counter from "./Counter/Counter.tsx";
import { counters } from "./intro.data.ts";
import styles from "./Intro.module.scss"

const Intro = () => {
  return (
    <div className={styles.intro}>
      <img className={styles.leaves} src={Leaves} width="234" height="247" alt="Leaves" loading="lazy" />

      <div className={styles.inner}>
        <h1 className={styles.title}>Growing Beautiful Plants at Home</h1>
        <Text text="Our indoor plant store is a real journey into the world of lush greenery and bright colors, capable of bringing harmony and charm to your home. Each piece has been carefully selected to provide you with maximum comfort and aesthetic enjoyment." />
        <Button text="Learn More" fontSize="18" padding="15px 30px" />

        <div className={styles.info}>
          {counters.map((counter, key) => (
            <Counter key={key} {...counter} />
          ))}
        </div>
      </div>

      <img className={styles.image} src={Plant} width="560" height="720" alt="Plant" loading="lazy" />
    </div>
  );
};

export default Intro;
