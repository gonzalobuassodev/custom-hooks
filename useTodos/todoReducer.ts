import { Todo } from "./todo.interface"


export const todoReducer = (initialState: any, action: any) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [...initialState, action.payload]
        case 'DELETE_TODO':
            return initialState.filter((todo: Todo) => todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return initialState.map((todo: Todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo, done: !todo.done
                    }
                }
                else {
                    return todo;
                }
            })
        default:
            return initialState;
    }

}