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
           <img className={styles.image} src={Plant} width="445" height="440" alt="Plant" loading="lazy" />
        </div>

        <div className={styles.info}>
            <p className={styles.suptitle}>About Us</p>
            <Title text="Continue to Develop to Became Global Company" fontSize="40"/>

            <Text style={styles.words} text="Our cozy indoor plant store welcomes everyone who wants to immerse themselves in the magical world of greenery and beauty. Here you will find a huge selection of ornamental plants, ideal for any interior style — be it modern minimalism, classic elegance or the warm atmosphere of a country cottage. We offer unique plants that can transform any room." />

            <p className={styles.text}>We give greenery to your home, comfort to the atmosphere, smiles to the hearts.</p>

            <Button text="Read More" fontSize="18" padding="16px 32px" />
        </div>
     </div>
  )
}

export default AboutUs;
