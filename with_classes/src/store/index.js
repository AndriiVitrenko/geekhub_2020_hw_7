import { configureStore } from '@reduxjs/toolkit';
import todoListSlice from './todoListSlice';

const store = configureStore({
  reducer: todoListSlice,
});

export default store;
