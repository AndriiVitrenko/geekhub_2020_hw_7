import React, { PureComponent } from 'react'

class TodoItem extends PureComponent {
    render() {
        const {text, index, isCompleted} = this.props.todo
        const onDelete = this.props.onDelete
        const checkboxHandler = this.props.checkboxHandler

        const classes = []

        if(isCompleted) {classes.push('completed')}


        return(
            <li className = {classes.join(' ')}>
                <p>
                    <span className='index'>{index + 1}.</span> 
                    <input
                        type='checkbox'
                        checked = {isCompleted}
                        onChange = {() => {checkboxHandler(index)}}
                    /> 
                    <span className='todo-text'>{text}</span>
                    <i className="fas fa-trash-alt" onClick={() => {onDelete(index)}}></i>
                </p>
            </li>
        )
    }
}

export default TodoItem