import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const pizza = {
  id: 1,
  img: "/img/pizza.png",
  name: "Campognola",
  price: [18.9, 23.9, 27.3],
  desc: "lorem ipsum dolor sit amet",
};

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Product;
