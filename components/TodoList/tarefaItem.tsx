import { useDispatch } from "react-redux";
import {
  completarTarefa,
  removerTarefa,
} from "../../Redux/features/tarefasSlice";
import { ContainerTarefa, Deletar, Editar, Icones } from "./styles";

interface TarefasCardTypes {
  tarefa: string;
  index: number;
  concluida?: boolean;
}

export default function TarefaItem({ tarefa, index }: TarefasCardTypes) {
  const dispatch = useDispatch();

  function deletarTarefa() {
    dispatch(removerTarefa(index));
  }

  function editarTarefa() {}

  return (
    <ContainerTarefa>
      <div>{tarefa}</div>
      <Icones>
        <Deletar onClick={deletarTarefa} />
        {/* <Editar /> */}
      </Icones>
    </ContainerTarefa>
  );
}
