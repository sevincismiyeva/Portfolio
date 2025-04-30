import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
   
      state.push({ id: Date.now(), text: action.payload });
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find(t => t.id === id);
      if (todo) todo.text = newText;
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    deleteAllTodos: () => []
  },
});

export const { addTodo, updateTodo, deleteTodo, deleteAllTodos } = todoSlice.actions;
export default todoSlice.reducer;
