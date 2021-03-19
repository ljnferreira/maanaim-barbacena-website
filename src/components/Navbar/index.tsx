import styles from "./Navbar.module.scss";
import { Facebook, Youtube, Instagram } from "../../assets/react-icons/";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Maanaim</span>
        <nav className={styles.navbarLinks}>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/grupodeoracaomaanaim/"
                target="_blank"
              >
                <Facebook className={styles.icons} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCoc1DrtiBJYu9DcLoPmb9fQ"
                target="_blank"
              >
                <Youtube className={styles.icons} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/maanaim.barbacena/"
                target="_blank"
              >
                <Instagram className={styles.icons} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
