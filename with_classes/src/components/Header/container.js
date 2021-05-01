import { connect } from 'react-redux';
import { addTodo } from '../../store/todoListSlice';
import Header from '.';

const mapDispatchToProps = (dispatch) => ({
  addTodo: (props) => {
    dispatch(addTodo(props));
  },
});

export default connect(null, mapDispatchToProps)(Header);
