import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
  constructor(props) {
    super(props);
    this.deleteItem = props.deleteItem;
    this.changeItemState = props.changeItemState;
    this.index = props.index;
  }

  changeHandler = () => {
    this.changeItemState(this.index);
  }

  deleteHandler = () => {
    this.deleteItem(this.index);
  }

  render() {
    const { text, index, isCompleted } = this.props;

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
