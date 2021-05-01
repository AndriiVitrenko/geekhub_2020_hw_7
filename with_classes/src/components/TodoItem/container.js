import { connect } from 'react-redux';
import { deleteItem, changeItemState } from '../../store/todoListSlice';
import TodoItem from '.';

const mapDispatchToProps = (dispatch) => ({
  changeItemState: (props) => dispatch(changeItemState(props)),
  deleteItem: (props) => dispatch(deleteItem(props)),
});

export default connect(null, mapDispatchToProps)(TodoItem);
