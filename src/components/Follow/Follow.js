import PlantOne from "../../assets/images/follow/1.png"
import PlantTwo from "../../assets/images/follow/2.png"
import PlantThree from "../../assets/images/follow/3.png"
import PlantFour from "../../assets/images/follow/4.png"
import PlantFive from "../../assets/images/follow/5.png"
import Title from "../ui/Title/Title.tsx"
import Text from "../ui/Text/Text.tsx"
import Post from "./Post/Post.js"
import styles from "./Follow.module.scss"

const Follow = () => {
  const gallery = [PlantOne, PlantTwo, PlantThree, PlantFour, PlantFive]

  return (
    <div className={styles.block}>
      <Title text="Follow Us on Instagram" fontSize="48" />

      <Text style={styles.text} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accu msan sit amet nunc cursus. Nec tristique at in erat lectus"></Text>

      <div className={styles.gallery}>
        {gallery.map((image, index) => (
          <Post key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Follow;
