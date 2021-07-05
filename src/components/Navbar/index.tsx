import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar: React.FC = () => {
  const router = useRouter();

  let path = router.pathname;

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.navbarLinks}>
          <ul>
            <li>
              <a className={styles.links} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.links} href="/about">
                Sobre nós
              </a>
            </li>
            <li>
              <a className={styles.links} href="/contact">
                Contato
              </a>
            </li>
            {path != "/login" && path != "/dashboard" && (
              <li>
                <a className={styles.loginButton} href="/login">
                  Log in
                </a>
              </li>
            )}
            {path == "/dashboard" && (
              <li>
                <a className={styles.loginButton} href="/">
                  Log out
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
