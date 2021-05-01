import React from 'react';
import TodoItem from '../TodoItem/container';

export default function TodoList({ list }) {
  return (
    <ol>
      {list.map((todo) => (
        <TodoItem
          index={todo.index}
          text={todo.text}
          isCompleted={todo.isCompleted}
          key={todo.index}
        />
      ))}
    </ol>
  );
}
