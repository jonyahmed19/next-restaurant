import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH yes, we did. The Lama Pizza, well Baked slice of pizza.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Find our restaurants</h1>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
