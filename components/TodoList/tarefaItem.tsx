import { ContainerTarefa } from "./styles";

interface TarefasCardTypes {
  tarefa: string;
  index: number;
}

export default function TarefaItem({ tarefa, index }: TarefasCardTypes) {
  return <ContainerTarefa>{tarefa}</ContainerTarefa>;
}
