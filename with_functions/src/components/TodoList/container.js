import { connect } from 'react-redux';
import TodoList from '.';

const mapStateToProps = (state) => ({ list: state.list });

export default connect(mapStateToProps)(TodoList);
