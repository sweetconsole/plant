import Title from "../ui/Title/Title.tsx";
import Plant from '../../assets/images/subscribe.png'
import Text from "../ui/Text/Text.tsx";
import styles from "./Subscribe.module.scss"

const Subscribe = () => {
  return (
    <div className={styles.subscribe} id="subscribe">
      <div className={styles.info}>
        <Title text="Subscribe Our Newsletter" fontSize="40" />
        <Text style={styles.text} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, at tempor, accumsan sit amet nunc cursus." />

        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder="Enter mail..." />
          <button className={styles.button}>Subscribe</button>
        </form>
      </div>

      <img className={styles.image} src={Plant} alt="Error load" />
    </div>
  );
};

export default Subscribe;
