import { type FC } from "react"
import Button from "../ui/Button/Button.tsx"
import Link from "./Link/Link.tsx"
import styles from "./Header.module.scss"

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="/">Plant</a>

      <div className={styles.navigation}>
        <Link link="collection" title="Collection" />
        <Link link="about-us" title="Abous Us" />
        <Link link="products" title="Products" />
        <Link link="reviews" title="Reviews" />
        <Link link="subscribe" title="Subscribe" />
      </div>

      <div className={styles.buttons}>
        <Button text="Login" fontSize="14" padding="10px 40px" filled={false} />
        <Button text="Sing Up" fontSize="14" padding="10px 40px" />
      </div>
    </div>
  )
}

export default Header
