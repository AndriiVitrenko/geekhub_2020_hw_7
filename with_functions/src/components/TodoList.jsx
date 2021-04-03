import React, { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList() {
  const list = useSelector((state) => state.list);

  return (
    <ol>
      {list.map((todo) => (
        <TodoItem todo={todo} key={todo.index} />
      ))}
    </ol>
  );
}
