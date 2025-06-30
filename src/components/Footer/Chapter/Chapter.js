import styles from "./Chapter.module.scss"

const Chapter = ({title, links}) => {
   return (
      <div>
         <p className={styles.title}>{title}</p>

         {links.map((name, key) => {
            return <p className={styles.link} key={key}>{name}</p>
         })}
      </div>
   );
};

export default Chapter;
