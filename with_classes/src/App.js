import React, { PureComponent } from 'react'
import TodoList from './components/TodoList';

class App extends PureComponent {
    state = {
        list: [
        {text: 'first task', index: 0, isCompleted: false},
        {text: 'second task', index: 1, isCompleted: false}
    ]}

    inputRef = React.createRef()

    addTodo = (e) => {
        e.preventDefault();
        const input = this.inputRef.current;

        if (input.value.trim()) {
            this.state.list.forEach(item => item.index++)

            this.setState({
                list: [{text: input.value, index: 0, isCompleted: false}, ...this.state.list,]
            })
            input.value = ''
        }
    }

    checkboxHandler = (index) => {
        this.state.list[index].isCompleted = !this.state.list[index].isCompleted
        this.setState({list: [...this.state.list]})
    }

    onDelete = (index) => {
        const newList = this.state.list.filter(elem => elem.index !== index)
        newList.forEach(item => item.index = newList.indexOf(item))
        this.setState({list: [...newList]})
    }

    render() {
        const list = this.state.list
        return(
            <>
                <form onSubmit = {this.addTodo} >
                    <input ref = {this.inputRef} type='text' placeholder='click Enter to add todo' className='input-field' />
                    <span className='bar'></span>
                </form>

                <TodoList list = {list} onDelete = {this.onDelete} checkboxHandler = {this.checkboxHandler} />
            </>
        )
    }
}

export default App;
