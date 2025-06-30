import Image from '../../assets/images/intro.png'
import Leaves from '../../assets/images/leaves.png'
import Counter from "./Counter/Counter";
import Button from "../ui/Button/Button";
import Text from "../ui/Text/Text"
import styles from "./Intro.module.scss"

const Intro = () => {
    return (
      <div className={styles.intro}>
         <img className={styles.leaves} src={Leaves} alt="Листики" />

         <div className={styles.inner}>
            <h1 className={styles.title}>Growing Beautiful Plants at Home</h1>

           <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam. Lectus elit, nulla elementum fringilla at." />

            <Button text="Learn More" font_size="18" padding="15px 30px" />

            <div className={styles.info}>
               <Counter count="2000" title="Delivery" />
               <Counter count="1200" title="Customers" />
               <Counter count="1000" title="Products" />
            </div>
         </div>

         <img className={styles.image} src={Image} alt="Цветок"/>
      </div>
   );
};

export default Intro;
