import { connect } from 'react-redux';
import TodoList from '.';

const mapToStateProps = (state) => ({ list: state.list });

export default connect(mapToStateProps)(TodoList);
