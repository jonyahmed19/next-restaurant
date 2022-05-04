import { useState } from "react";
import styles from "../styles/Featured.module.css";
import Image from "next/image";

const images = [
  "/img/featured1.jpg",
  "/img/featured2.jpg",
  "/img/featured3.jpg",
];
const Featured = (direction) => {
  const [slider, setSlider] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "1") {
      setSlider(slider !== 0 ? slider - 1 : 2);
    }
    if (direction === "r") {
      setSlider(slider !== 2 ? slider + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        onClick={() => handleArrow("1")}
        className={styles.arrowContainer}
        style={{ left: 0 }}
      >
        <Image src="/img/arrowl.png" layout="fill" alt="" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slider}vw)` }}
      >
        {images.map((img, index) => (
          <div key={index} className={styles.imgContainer}>
            <Image src={img} layout="fill" alt="" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        onClick={() => handleArrow("r")}
        className={styles.arrowContainer}
        style={{ right: 0 }}
      >
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
