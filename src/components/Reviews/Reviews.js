import Title from "../ui/Title/Title";
import Feedback from "./Feedback/Feedback";
import Image from '../../assets/images/reviews/image.png'
import Text from "../ui/Text/Text"
import styles from "./Reviews.module.scss"

const Reviews = () => {
  return (
    <div className={styles.block} id="reviews">
      <div className={styles.info}>
        <Title text="What Our Customers Says" fontSize="40" />
        <Text style={styles.text} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at." />

        <Feedback />
      </div>

      <img className={styles.image} src={Image} alt="Error load" />
    </div>
  );
};

export default Reviews;
