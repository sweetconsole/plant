import { type FC } from "react"
import styles from "./Title.module.scss"

export interface ITitleProps {
   text: string
   fontSize?: string
}

const Title: FC<ITitleProps> = ({text,fontSize}) => {
   return (
      <h2 className={styles.title} 
          style={{fontSize: `${fontSize}px`}}>
         {text}
      </h2>
   );
};

export default Title;
