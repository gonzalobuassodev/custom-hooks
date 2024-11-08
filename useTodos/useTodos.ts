import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"
import { Todo } from "../08-useReducer/interfaces"


const initialState: Todo[] = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || '[]')
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo: any) => {
        const action = {
            type: 'ADD_TODO',
            payload: todo,
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id: number) => {
        const action = {
            type: 'DELETE_TODO',
            payload: id,
        }
        dispatch(action)
    }

    const handleToggleTodo = (id: number) => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: id,
        }
        dispatch(action)
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
