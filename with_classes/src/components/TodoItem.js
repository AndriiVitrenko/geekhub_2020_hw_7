import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteItem, changeItemState } from '../store/todoListSlice';

class TodoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.deleteItem = props.deleteItem;
    this.changeItemState = props.changeItemState;
    this.todo = props.todo;
  }

  changeHandler = () => {
    this.changeItemState(this.todo.index);
  }

  deleteHandler = () => {
    this.deleteItem(this.todo.index);
  }

  render() {
    const { text, index, isCompleted } = this.props.todo;

    return (
      <li className={isCompleted ? 'completed' : ''}>
        <p>
          <span className="index">
            {index + 1}
            .
          </span>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={this.changeHandler}
          />
          <span className="todo-text">{text}</span>
          <button type="button" onClick={this.deleteHandler}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </p>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeItemState: (props) => dispatch(changeItemState(props)),
  deleteItem: (props) => dispatch(deleteItem(props)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
