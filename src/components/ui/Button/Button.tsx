import styles from "./Button.module.scss"
import type {FC} from "react";

interface IButtonProps {
  text: string
  fontSize: string
  padding: string
  filled?: boolean
}

const Button: FC<IButtonProps> = ({text, fontSize, padding, filled = true}) => {return (
    <button className={filled ? styles.button_filled : styles.button_border}
            style={{fontSize: `${fontSize}px`, padding: padding}}>
       {text}
    </button>
  );
};

export default Button;
