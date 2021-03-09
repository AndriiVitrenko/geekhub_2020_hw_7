import { TodoItem } from "./TodoItem";
import {useSelector} from 'react-redux';

export function TodoList() {
    const list = useSelector(state => state.list)

    return(
        <ol>
            {list.map((todo, i) => {
                    return <TodoItem todo = {todo} key = {todo.id}/> 
                })
            }
        </ol>
    )
}