import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store';

export default function Header() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const input = inputRef.current;

      if (input.value.trim()) {
        dispatch(addTodo(input.value.trim()));

        input.value = '';
      }
    }, [dispatch],
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <input ref={inputRef} type="text" placeholder="click Enter to add todo" className="input-field" />
      <span className="bar"></span>
    </form>
  );
}
