import Head from "next/head";
import styles from "../styles/pages/Dashboard.module.scss";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head key="Dashboard">
        <title>Dashboard | Maanaim Barbacena</title>
      </Head>
      <div className={styles.container}>
        <Navbar></Navbar>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
