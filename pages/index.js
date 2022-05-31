import Head from "next/head";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import { Fragment } from "react/cjs/react.production.min";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Pizza Restaurant in Newyork</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </Fragment>
  );
}
