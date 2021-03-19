import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  let path = router.pathname;

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.logo}>Maanaim</span>
        <nav className={styles.navbarLinks}>
          <ul>
            <li>
              <a className={styles.links} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.links} href="/about">
                Sobre
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
