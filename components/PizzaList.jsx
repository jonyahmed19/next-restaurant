import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Pizza in Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        nesciunt tenetur deleniti fugiat mollitia reiciendis esse veritatis
        accusantium repellendus consequuntur labore doloremque atque earum,
        rerum iure aut. Vero, numquam aliquid.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
