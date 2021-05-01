import React, { useRef, useCallback } from 'react';

export default function Header({ setTodo }) {
  const inputRef = useRef();
  const onSubmitHandler = useCallback(
    (e) => {
      e.preventDefault();

      const input = inputRef.current;

      if (input.value.trim()) {
        setTodo(input.value.trim());

        input.value = '';
      }
    }, [],
  );

  return (
    <form onSubmit={onSubmitHandler}>
      <input ref={inputRef} type="text" placeholder="click Enter to add todo" className="input-field" />
      <span className="bar"></span>
    </form>
  );
}
