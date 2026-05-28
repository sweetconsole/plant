import type { FC } from "react"
import type { CounterType } from "../intro.data.ts"
import styles from "./Counter.module.scss"

const Counter: FC<CounterType> = ({count, title}) => {
  return (
    <div className={styles.counter}>
      <p className={styles.count}>{count}+</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Counter;
