import React, { useCallback } from 'react';

export default function TodoItem({
  text, index, isCompleted, removeTodo, changeState,
}) {
  const onDeleteHandler = useCallback(
    () => {
      removeTodo(index);
    }, [index],
  );

  const onChangeHandler = useCallback(
    () => {
      changeState(index);
    }, [index],
  );

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
          onChange={onChangeHandler}
        />
        <span className="todo-text">{text}</span>
        <button type="button" onClick={onDeleteHandler}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </p>
    </li>
  );
}
