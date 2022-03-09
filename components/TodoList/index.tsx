import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTarefa } from "../../Redux/features/tarefasSlice";
import { RootState } from "../../Redux/store";
import { Container } from "./styles";
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
      <form onSubmit={handleSubmit}>
        <input
          value={valorInput}
          onChange={(e) => setValorInput(e.target.value)}
          type="text"
        />
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <div>
            <TarefaItem tarefa={tarefa} index={index} />
          </div>
        ))}
      </ul>
    </Container>
  );
}
