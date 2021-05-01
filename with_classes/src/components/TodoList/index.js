import React, { PureComponent } from 'react';
import TodoItem from '../TodoItem/container';

export default class TodoList extends PureComponent {
  render() {
    const { list } = this.props;

    return (
      <ul>
        {
          list.map((todo) => (
            <TodoItem
              index={todo.index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              key={todo.index}
            />
          ))
        }
      </ul>
    );
  }
}
