import styles from "./Footer.module.scss";
import logo from "assets/logo.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo do aluroni" />
    </footer>
  );
}
