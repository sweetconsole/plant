import { type FC } from "react"
import Marks from "../../../assets/images/reviews/marks.png"
import AvatarOne from "../../../assets/images/reviews/avatar.png"
import styles from "./Feedback.module.scss"

const Feedback: FC = () => {
   return (
      <div className={styles.feedback}>
         <div className={styles.container}>
            <div className={styles.author}>
               <div className={styles.author_photo} style={{ backgroundImage: `url(${AvatarOne})` }}/>

               <div>
                  <p className={styles.author_name}>Michael Thompson</p>
                  <p className={styles.author_job}>Interior Designer</p>
               </div>

               <img className={styles.marks} src={Marks} alt="marks" />
            </div>

            <p className={styles.text}>Your store has impressed you with its excellent selection of plants, helpful tips, and high-quality delivery. The house immediately became more comfortable. I recommend it to everyone!</p>

            <div className={styles.buttons}>
               <button className={styles.button}></button>
               <button className={styles.button}></button>
            </div>
         </div>
      </div>
   );
};

export default Feedback;
