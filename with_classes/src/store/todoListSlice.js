import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoListSlice',
  initialState: {
    list: [
      { text: 'first task', index: 0, isCompleted: true },
      { text: 'second task', index: 1, isCompleted: false },
    ],
  },
  reducers: {
    addTodo(state, action) {
      state.list = [{ text: action.payload, index: 0, isCompleted: false }, ...state.list];
      state.list.forEach((item, i) => item.index = i);
    },
    changeItemState(state, action) {
      state.list[action.payload].isCompleted = !state.list[action.payload].isCompleted;
    },
    deleteItem(state, action) {
      state.list.splice(action.payload, 1);
      state.list.forEach((item, i) => item.index = i);
    },
  },
});

export const {
  addTodo,
  changeItemState,
  deleteItem,
} = todoListSlice.actions;

export default todoListSlice.reducer;
