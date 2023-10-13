import dynamic from 'next/dynamic'

const TodoList = dynamic(
    () => {
        return import('./todoList')
    },
    { ssr: false }
)

const Todo = () => {
    return <TodoList />
}

export default Todo
