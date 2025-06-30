import styles from "./Title.module.scss"

const Title = ({text,fontSize,}) => {
   let style = {
      fontSize: fontSize + "px"
   }

   return (
      <h2 className={styles.title} style={style}>{text}</h2>
   );
};

export default Title;
