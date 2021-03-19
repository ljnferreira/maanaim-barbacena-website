import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head key="Home">
        <title>Inicio | Maanaim Barbacena</title>
      </Head>
      <div className={styles.container}>
        <Navbar></Navbar>
        <h1>Home</h1>
      </div>
    </>
  );
}
