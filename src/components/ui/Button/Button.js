import styles from "./Button.module.scss"

const Button = ({text, font_size, padding, filled = true}) => {

   return (
      <button className={filled ? styles.button_filled : styles.button_border}
              style={{fontSize: `${font_size}px`, padding: padding}}>
         {text}
      </button>
   );
};

export default Button;
