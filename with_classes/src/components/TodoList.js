import React, {PureComponent} from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends PureComponent {
    render() {
        const {list} = this.props

        return(
            <ul>
                {
                    list.map((todo, i) => {
                        return <TodoItem todo = {todo} key = {i} />
                    })
                }
            </ul>
        )
    }
}

const mapToStateProps = state => ({list: state.list})

export default connect(mapToStateProps)(TodoList)