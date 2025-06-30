import Image from "../../assets/images/about-us.png"
import Title from "../ui/Title/Title";
import Button from "../ui/Button/Button";
import Text from "../ui/Text/Text";
import styles from "./AboutUs.module.scss"

const AboutUs = () => {
  return (
     <div className={styles.block} id="about-us">
        <div className={styles.image_container}>
           <div className={styles.image_background} />
           <img className={styles.image} src={Image} alt="Error load" />
        </div>

        <div className={styles.info}>
            <p className={styles.suptitle}>About Us</p>
            <Title text="Continue to Develop to Became Global Company" fontSize="40"/>

            <Text style={styles.words} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at." />

            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus.</p>

            <Button text="Read More" font_size="18" padding="16px 32px" />
        </div>
     </div>
  )
}

export default AboutUs;
