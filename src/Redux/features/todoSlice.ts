import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TTodoAction {
  id: string;
  title: string;
  description: string;
  isComplete?: boolean;
}

const initialState: { todo: TTodoAction[] } = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTodoAction>) => {
      state.todo.push({ ...action.payload, isComplete: false });
    },
    deleteTask: (state, action : PayloadAction<string>) => {
      // console.log(action.payload)
      state.todo = state.todo.filter((item) => item?.id !== action.payload);
    },

    isCompletedHandler: (state,  action :PayloadAction<string> ) => {
      const findTheItem = state.todo.find((item) => item.id === action.payload)
      findTheItem!.isComplete = !findTheItem?.isComplete
    }
  },
});

export const { addTask, deleteTask, isCompletedHandler } = todoSlice.actions;
export default todoSlice.reducer;
