import { type FC } from "react"
import Image from '../../assets/images/reviews/image.png'
import { Text, Title } from "../ui"
import Feedback from "./Feedback/Feedback.tsx";
import styles from "./Reviews.module.scss"

const Reviews: FC = () => {
  return (
    <div className={styles.block} id="reviews">
      <div className={styles.info}>
        <Title text="What Our Customers Says" fontSize="40" />
        <Text style={styles.text} text="They choose us for a large selection of healthy plants, expert advice, convenient delivery, high quality and affordable prices. We take care of your comfort and coziness at home." />

        <Feedback />
      </div>

      <img className={styles.image} src={Image} alt="Error load" />
    </div>
  );
};

export default Reviews;
