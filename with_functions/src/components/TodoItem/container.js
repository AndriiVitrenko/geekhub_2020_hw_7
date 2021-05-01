import { connect } from 'react-redux';
import TodoItem from '.';
import { changeTodoState, deleteTodo } from '../../store';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (props) => dispatch(deleteTodo(props)),
  changeState: (props) => dispatch(changeTodoState(props)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
