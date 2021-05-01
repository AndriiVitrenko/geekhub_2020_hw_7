import React, { PureComponent } from 'react';
import Header from './components/Header/container';
import TodoList from './components/TodoList/container';

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <TodoList />
      </>
    );
  }
}

export default App;
