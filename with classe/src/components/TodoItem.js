import React, { PureComponent } from 'react'

class TodoItem extends PureComponent {
    render() {
        const {text, index} = this.props.todo
        const onDelete = this.props.onDelete

        return(
            <li>
                <p>
                    <span className='index'>{index + 1}.</span> 
                    <input type='checkbox' /> 
                    <span className='todo-text'>{text}</span>
                    <i className="fas fa-trash-alt" onClick={() => {onDelete(index)}}></i>
                </p>
            </li>
        )
    }
}

export default TodoItem