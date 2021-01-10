import React, { PureComponent } from 'react'
import TodoList from './components/TodoList';

class App extends PureComponent {
    state = {
        list: [
        {text: 'first task', index: 0},
        {text: 'second task', index: 1}
    ]}

    inputRef = React.createRef()

    addTodo = (e) => {
        e.preventDefault();
        const input = this.inputRef.current;

        if (input.value.trim()) {
            this.state.list.forEach(item => item.index++)

            this.setState({
                list: [{text: input.value, index: 0}, ...this.state.list,]
            })
            input.value = ''
        }
    }

    onDelete = (index) => {
        this.state.list = this.state.list.filter(elem => elem.index !== index)
        this.state.list.forEach(item => item.index = this.state.list.indexOf(item))
        this.setState({list: [...this.state.list]})
    }

    render() {
        const list = this.state.list
        return(
            <>
                <form onSubmit = {this.addTodo} >
                    <input ref = {this.inputRef} type='text' placeholder='click Enter to add todo' className='input-field' />
                    <span className='bar'></span>
                </form>

                <TodoList list = {list} onDelete = {this.onDelete} />
            </>
        )
    }
}

export default App;
