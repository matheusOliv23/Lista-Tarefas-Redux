import type { NextPage } from 'next'
import Head from 'next/head'
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo List</title>
      </Head>
      <TodoList />
    </div>
  );
};

export default Home
