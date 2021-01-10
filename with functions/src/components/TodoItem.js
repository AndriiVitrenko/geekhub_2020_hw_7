export function TodoItem(props) {
    const {text, index} = props.todo;
    const onDelete = props.onDelete

    return(
        <li>
            <p>
                <span className='index'>{index + 1}.</span> 
                <input type='checkbox' /> 
                <span className='todo-text'>{text}</span>
                <i className="fas fa-trash-alt" onClick={() => {onDelete(index)}}></i>
            </p>
        </li>
    )
}