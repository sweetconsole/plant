import styles from "./Counter.module.scss"

const Counter = ({count, title}) => {
  return (
   <div className={styles.counter}>
      <p className={styles.count}>{count}+</p>
      <p className={styles.title}>{title}</p>
   </div>
  );
};

export default Counter;
