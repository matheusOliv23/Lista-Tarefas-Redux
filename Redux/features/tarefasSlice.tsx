import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TarefasState {
  value: string[];
}

const initialState: TarefasState = {
  value: [],
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
  },
});

export const { addTarefa, removerTarefa } = tarefasSlice.actions;
export default tarefasSlice.reducer;
