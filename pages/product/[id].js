import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react/cjs/react.development";

const pizza = {
  id: 1,
  img: "/img/pizza.png",
  name: "Campognola",
  price: [18.9, 23.9, 27.3],
  desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
};

const Product = () => {
  const [size, setSize] = useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            layout="fill"
            objectFit="contain"
            alt={pizza.name}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size}>
            <Image src={"/img/size.png"} layout="fill" alt="Small" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size}>
            <Image src={"/img/size.png"} layout="fill" alt="Medium" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size}>
            <Image src={"/img/size.png"} layout="fill" alt="Large" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
