import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTarefa } from "../../Redux/features/tarefasSlice";
import { RootState } from "../../Redux/store";
import {
  Button,
  Container,
  Deletar,
  Editar,
  FormContainer,
  Icones,
  Input,
  Titulo,
} from "./styles";
import TarefaItem from "./tarefaItem";

export default function TodoList() {
  const [valorInput, setValorInput] = useState("");

  const tarefas = useSelector((state: RootState) => state.tarefas.value);

  const dispatch = useDispatch();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!valorInput) return;
    dispatch(addTarefa(valorInput));
    setValorInput("");
  }
  return (
    <Container>
      <Titulo>React Redux Toolkit</Titulo>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          type="text"
          placeholder="Adicione uma tarefa"
        />
        <Button type="submit">adicionar</Button>
      </FormContainer>

      {tarefas.map((tarefa, index) => (
        <TarefaItem key={index} tarefa={tarefa} index={index} />
      ))}
    </Container>
  );
}
