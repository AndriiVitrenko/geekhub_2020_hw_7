import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList/container';
import Header from './components/Header/container';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <TodoList />
    </Provider>
  );
}

export default App;
