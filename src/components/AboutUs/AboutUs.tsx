import { type FC } from "react"
import Plant from "../../assets/images/about-us.png"
import Title from "../ui/Title/Title.tsx";
import Button from "../ui/Button/Button.tsx";
import Text from "../ui/Text/Text.tsx";
import styles from "./AboutUs.module.scss"

const AboutUs: FC = () => {
  return (
     <div className={styles.block} id="about-us">
        <div className={styles.image_container}>
           <div className={styles.image_background} />
           <img className={styles.image} src={Plant} alt="Plant" />
        </div>

        <div className={styles.info}>
            <p className={styles.suptitle}>About Us</p>
            <Title text="Continue to Develop to Became Global Company" fontSize="40"/>

            <Text style={styles.words} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at." />

            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.</p>

            <Button text="Read More" fontSize="18" padding="16px 32px" />
        </div>
     </div>
  )
}

export default AboutUs;
