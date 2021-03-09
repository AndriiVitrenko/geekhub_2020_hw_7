import React, {PureComponent} from 'react';
import { addTodo } from '../store/todoListSlice';
import { connect } from 'react-redux'

class Header extends PureComponent {
    inputRef = React.createRef()

    formSubmitHandler = (e) => {
        e.preventDefault()
        const input = this.inputRef.current

        if (input.value.trim()) {
            this.props.addTodo(input.value.trim())
        }
    }

    render() {
        return(
            <>
                <form onSubmit={this.formSubmitHandler}>
                    <input ref = {this.inputRef} type='text' placeholder='click Enter to add todo' className='input-field' />
                    <span className='bar'></span>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (props) => {
            dispatch(addTodo(props))
        }
    }
}

export default connect(null, mapDispatchToProps)(Header)