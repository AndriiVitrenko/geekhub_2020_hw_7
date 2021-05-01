import React, { PureComponent } from 'react';

export default class Header extends PureComponent {
  inputRef = React.createRef();

  constructor(props) {
    super(props);
    this.addTodo = props.addTodo;
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const input = this.inputRef.current;

    if (input.value.trim()) {
      this.addTodo(input.value.trim());
      input.value = '';
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.formSubmitHandler}>
          <input ref={this.inputRef} type="text" placeholder="click Enter to add todo" className="input-field" />
          <span className="bar"></span>
        </form>
      </>
    );
  }
}
