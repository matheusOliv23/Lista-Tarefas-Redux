import type { NextPage } from 'next'
import Head from 'next/head'
import TodoList from "../components/TodoList";
import { ContainerGeral } from "../components/TodoList/styles";

const Home: NextPage = () => {
  return (
    <ContainerGeral>
      <Head>
        <title>Tarefas</title>
      </Head>
      <TodoList />
    </ContainerGeral>
  );
};

export default Home
