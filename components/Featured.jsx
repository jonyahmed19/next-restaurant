import styles from "../styles/Featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" width="100px" height="100px" alt="" />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src="/img/arrowr.png" width="100px" height="100px" alt="" />
        </div>
      </div>
      <Image src="/img/arrowr.png" width="100px" height="100px" alt="" />
    </div>
  );
};

export default Featured;
