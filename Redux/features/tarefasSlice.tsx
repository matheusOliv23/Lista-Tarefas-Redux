import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TarefasState {
  value: string[];
  id: string;
}

const initialState: TarefasState = {
  value: [],
  id: "",
};

export const tarefasSlice = createSlice({
  name: "tarefas",
  initialState,
  reducers: {
    addTarefa: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removerTarefa: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
    // concluirTarefa: (state, action: PayloadAction<{ completa: boolean; id: string }>) => {
    // const index = state.value.findIndex((tarefa) => tarefa === action.payload.id)
    //   state.value[index] = action.payload.completa;
    // }
  },
});

export const { addTarefa, removerTarefa } = tarefasSlice.actions;
export default tarefasSlice.reducer;
