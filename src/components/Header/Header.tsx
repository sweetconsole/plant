import { type FC } from "react"
import Button from "../ui/Button/Button.tsx"
import Link from "./Link/Link.tsx"
import styles from "./Header.module.scss"

const Header: FC = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} href="/">Plant</a>

      <div className={styles.navigation}>
        <Link link="collection" title="Коллекция" />
        <Link link="about-us" title="О нас" />
        <Link link="products" title="Растения" />
        <Link link="reviews" title="Отзывы" />
        <Link link="subscribe" title="Подписка" />
      </div>

      <div className={styles.buttons}>
        <Button text="Войти" fontSize="14" padding="10px 40px" filled={false} />
        <Button text="Регистрация" fontSize="14" padding="10px 40px" />
      </div>
    </div>
  )
}

export default Header
