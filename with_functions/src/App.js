import React from 'react';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import Header from './components/Header';
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
