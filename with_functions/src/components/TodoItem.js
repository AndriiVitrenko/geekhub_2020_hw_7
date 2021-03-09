import {useDispatch} from 'react-redux';
import {changeTodoState, deleteTodo} from '../store';
import {useCallback} from 'react';

export function TodoItem(props) {
    const {text, index, isCompleted} = props.todo;
    const dispatch = useDispatch();
    
    const onDeleteHandler = useCallback(
        () => {
            dispatch(deleteTodo(index))
        }
    , [dispatch, index])

    const onChangeHandler = useCallback(
        () => {
            dispatch(changeTodoState(index))
        }
    , [dispatch, index])

    return(
        <li className = {isCompleted ? 'completed' : ''}>
            <p>
                <span className='index'>{index + 1}.</span> 
                <input type='checkbox'
                 checked = {isCompleted}
                 onChange = {onChangeHandler} /> 
                <span className='todo-text'>{text}</span>
                <button onClick={onDeleteHandler}><i className="fas fa-trash-alt"></i></button>
            </p>
        </li>
    )
}