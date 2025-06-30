import Marks from "../../../assets/images/reviews/marks.png"
import AvatarOne from "../../../assets/images/reviews/avatar.png"
import styles from "./Feedback.module.scss"

const Feedback = () => {
   return (
      <div className={styles.feedback}>
         <div className={styles.container}>
            <div className={styles.author}>
               <div className={styles.author_photo} style={{ backgroundImage: `url(${AvatarOne})` }}/>

               <div>
                  <p className={styles.author_name}>Hasanul Islam</p>
                  <p className={styles.author_job}>Marketing SEO</p>
               </div>

               <img className={styles.marks} src={Marks} alt="marks" />
            </div>

            <p className={styles.text}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in 
               erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at.
            </p>

            <div className={styles.buttons}>
               <button className={styles.button}></button>
               <button className={styles.button}></button>
            </div>
         </div>
      </div>
   );
};

export default Feedback;
