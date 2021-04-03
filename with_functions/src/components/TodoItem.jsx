import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { changeTodoState, deleteTodo } from '../store';

export default function TodoItem({ todo }) {
  const { text, index, isCompleted } = todo;
  const dispatch = useDispatch();
  const onDeleteHandler = useCallback(
    () => {
      dispatch(deleteTodo(index));
    }, [dispatch, index],
  );

  const onChangeHandler = useCallback(
    () => {
      dispatch(changeTodoState(index));
    }, [dispatch, index],
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
