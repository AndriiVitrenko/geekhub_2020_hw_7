import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    const { list } = this.props;

    return (
      <ul>
        {
          list.map((todo) => (
            <TodoItem todo={todo} key={todo.index} />
          ))
        }
      </ul>
    );
  }
}

const mapToStateProps = (state) => ({ list: state.list });

export default connect(mapToStateProps)(TodoList);
