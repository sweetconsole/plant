import Plant from '../../assets/images/subscribe.png'
import { Text, Title } from "../ui";
import styles from "./Subscribe.module.scss"

const Subscribe = () => {
  return (
    <div className={styles.subscribe} id="subscribe">
      <div className={styles.info}>
        <Title text="Subscribe Our Newsletter" fontSize="40" />
        <Text style={styles.text} text="The store's newsletter will give you care tips, decor ideas, discounts, and new product announcements" />

        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder="Enter mail..." />
          <button className={styles.button}>Subscribe</button>
        </form>
      </div>

      <img className={styles.image} src={Plant} alt="Plant" />
    </div>
  );
};

export default Subscribe;
