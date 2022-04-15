import styles from "../styles/Featured.module.css";
import Image from "next/image";

const images = [
  "/img/featured1.jpg",
  "/img/featured2.jpg",
  "/img/featured3.jpg",
];

const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image src="/img/arrowl.png" layout="fill" alt="" />
      </div>
      <div className={styles.wrapper}>
        {images.map((img, index) => (
          <div key={index} className={styles.imgContainer}>
            <Image src={img} layout="fill" alt="" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image src="/img/arrowr.png" layout="fill" alt="" />
      </div>
    </div>
  );
};

export default Featured;
