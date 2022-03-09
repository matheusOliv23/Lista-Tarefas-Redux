import { ContainerTarefa, Deletar, Editar, Icones } from "./styles";

interface TarefasCardTypes {
  tarefa: string;
  index: number;
  concluida?: boolean;
}

export default function TarefaItem({ tarefa, index }: TarefasCardTypes) {
  return (
    <ContainerTarefa>
      <div>{tarefa}</div>
      <Icones>
        <Deletar />
        <Editar />
      </Icones>
    </ContainerTarefa>
  );
}
