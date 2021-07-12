import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Navbar from "../components/Navbar";
import HomePageContent from "../components/HomePageContent";
import Scroll from "../components/Scroll";

export default function Home() {
  return (
    <>
      <Head key="Home">
        <title>Inicio | Maanaim Barbacena</title>
      </Head>
      <section className={styles.landingPage}>
        <Navbar></Navbar>
        <HomePageContent
          title="G. O. Maanaim Barbacena"
          subtitle="Perceber que a natureza dá sinais do amor de Deus..."
        />
        <Scroll />
      </section>
      <section id="about" className={styles.aboutPage}></section>
    </>
  );
}
