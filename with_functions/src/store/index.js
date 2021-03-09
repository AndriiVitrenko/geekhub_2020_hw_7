import {createSlice, configureStore} from '@reduxjs/toolkit'

const todoListSlice = createSlice({
    name: 'todoListSlice',
    initialState: {
        list: [
            {
                text: '1',
                isCompleted: true,
                id: 1,
                index: 0,
            },
            {
                text: '2',
                isCompleted: false,
                id: 2,
                index: 1,
            },
        ]
    },
    reducers: {
        addTodo(state, action) {
            state.list = [{
                text: action.payload,
                isCompleted: false,
                id: (Math.random()*10).toFixed(0),
            }, ...state.list]

            state.list.forEach((item, index) => item.index = index)
        },

        changeTodoState(state, action) {
            state.list[action.payload].isCompleted = !state.list[action.payload].isCompleted;
        },

        deleteTodo(state, action) {
            state.list.splice(action.payload, 1)

            state.list.forEach((item, index) => item.index = index)
        },
    }
})

export const store = configureStore({
    reducer: todoListSlice.reducer,
})

export const {
    addTodo,
    deleteTodo, 
    changeTodoState,
} = todoListSlice.actions