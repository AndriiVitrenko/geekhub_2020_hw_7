import React, { PureComponent } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';

class App extends PureComponent {
    render() {
        return(
            <>
                <Header />
                <TodoList />
            </>
        )
    }
}

export default App;
