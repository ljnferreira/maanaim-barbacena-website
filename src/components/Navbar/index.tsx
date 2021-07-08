import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC = () => {
  const router = useRouter();

  let path = router.pathname;

  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <nav className={styles.navbarLinks}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.links}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a className={styles.links}>Sobre nós</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className={styles.links}>Contato</a>
              </Link>
            </li>
            <li>
              {path != "/login" && path != "/dashboard" && (
                <Link href="/login">
                  <a className={styles.loginButton}>Log in</a>
                </Link>
              )}
              {path == "/dashboard" && (
                <Link href="/">
                  <a className={styles.loginButton}>Log out</a>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
