import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/todoListSlice';

class Header extends PureComponent {
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

const mapDispatchToProps = (dispatch) => ({
  addTodo: (props) => {
    dispatch(addTodo(props));
  },
});

export default connect(null, mapDispatchToProps)(Header);
