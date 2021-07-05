import styles from "./HomePageContent.module.scss";

interface Props {
  title: string;
  subtitle: string;
}

const HomePageContent = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};

export default HomePageContent;
