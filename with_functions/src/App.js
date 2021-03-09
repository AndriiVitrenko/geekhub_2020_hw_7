import { TodoList } from "./components/TodoList.js";
import React from 'react';
import { Header } from "./components/Header.js";
import {store} from './store';
import {Provider} from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <TodoList />
    </Provider>
  );
}

export default App;
