import { connect } from 'react-redux';
import Header from '.';
import { addTodo } from '../../store';

const mapDispatchToProps = (dispatch) => ({
  setTodo: (props) => dispatch(addTodo(props)),
});

export default connect(null, mapDispatchToProps)(Header);
