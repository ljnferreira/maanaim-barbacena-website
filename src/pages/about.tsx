import Head from "next/head";
import styles from "../styles/pages/About.module.scss";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head key="About">
        <title>Sobre | Maanaim Barbacena</title>
      </Head>
      <div className={styles.container}>
        <Navbar></Navbar>
        <h1>Sobre</h1>
      </div>
    </>
  );
}
