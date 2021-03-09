import React, { PureComponent } from 'react';
import { deleteItem, changeItemState } from '../store/todoListSlice';
import { connect } from 'react-redux';

class TodoItem extends PureComponent {
    changeHandler = () => {
        this.props.changeItemState(this.props.todo.index)
    }

    deleteHandler = () => {
        this.props.deleteItem(this.props.todo.index)
    }

    render() {
        const {text, index, isCompleted} = this.props.todo

        return(
            <li className = {isCompleted ? 'completed' : ''}>
                <p>
                    <span className='index'>{index + 1}.</span> 
                    <input
                        type='checkbox'
                        checked = {isCompleted}
                        onChange = {this.changeHandler}
                    /> 
                    <span className='todo-text'>{text}</span>
                    <i className="fas fa-trash-alt" onClick={this.deleteHandler}></i>
                </p>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeItemState: (props) => dispatch(changeItemState(props)),
        deleteItem: (props) => dispatch(deleteItem(props)),
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)