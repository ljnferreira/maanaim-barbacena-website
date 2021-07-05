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
      <div className={styles.container}>
        <Navbar></Navbar>
        <HomePageContent
          title="G. O. Maanaim Barbacena"
          subtitle="Perceber que a natureza dá sinais do amor de Deus..."
        />
        <Scroll />
      </div>
    </>
  );
}
