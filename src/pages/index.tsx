import Head from "next/head";
import styles from "../styles/pages/Home.module.scss";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <h1>hello world</h1>
    </div>
  );
}
