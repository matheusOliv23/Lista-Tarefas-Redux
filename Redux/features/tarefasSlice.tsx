import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TarefasState {
  value: string[];
  id: string;
  completar: boolean;
}

const initialState: TarefasState = {
  value: [],
  id: "",
  completar: false,
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
    completarTarefa: (
      state,
      action: PayloadAction<{ completar: string; id: string }>
    ) => {
      state.value.map((item) => {
        if (item === action.payload.id) {
          state.completar = !state.completar;
        }
        return item;
      });
    },
  },
});

export const { addTarefa, removerTarefa, completarTarefa } =
  tarefasSlice.actions;
export default tarefasSlice.reducer;
