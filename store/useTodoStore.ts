import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TodoStoreType {
    todos: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    addTodo: (todo: {
        id: number;
        title: string;
        completed: boolean;
    }) => void;
    removeTodo: (todoId: number) => void;
    todoStatus: (todoId: number) => void;
}

const useTodoStore = create<TodoStoreType>()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (todo: {
                    id: number;
                    title: string;
                    completed: boolean;
                }) =>
                    set((state) => ({
                        todos: [todo, ...state.todos],
                    })),
                removeTodo: (todoId: number) =>
                    set((state) => ({
                        todos: state.todos.filter(
                            (todo) => todo.id !== todoId
                        ),
                    })),
                todoStatus: (todoId: number) =>
                    set((state) => ({
                        todos: state.todos.map((todo) =>
                            todo.id === todoId
                                ? { ...todo, completed: !todo.completed }
                                : todo
                        ),
                    })),
            }),
            { name: "todos" }
        )
    )
);

export default useTodoStore;
