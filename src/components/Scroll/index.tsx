import { ArrowDownIcon } from "../../assets/react-icons";
import styles from "./Scroll.module.scss";

import Link from "next/link";

const Scroll: React.FC = () => {
  return (
    <div className={styles.container}>
      <Link href="#about">
        <ArrowDownIcon />
      </Link>
    </div>
  );
};

export default Scroll;
