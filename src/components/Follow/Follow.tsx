import { type FC } from "react"
import { Text, Title } from "../ui"
import Post from "./Post/Post.tsx"
import { gallery } from "./post.data.ts";
import styles from "./Follow.module.scss"

const Follow: FC = () => {
  return (
    <div className={styles.block}>
      <Title text="Follow Us on Instagram" fontSize="48" />

      <Text style={styles.text} text="By subscribing to our store's Instagram, you will learn fresh design ideas, useful care tips, exclusive discounts and new products"></Text>

      <div className={styles.gallery}>
        {gallery.map((image, key) => (
          <Post key={key} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Follow;
