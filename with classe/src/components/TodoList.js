import React, {PureComponent} from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
    render() {
        const {list, onDelete} = this.props;

        return(
            <ul>
                {
                    list.map((todo, i) => {
                        return <TodoItem todo = {todo} key={i} onDelete = {onDelete} />
                    })
                }
            </ul>
        )
    }
}

export default TodoList