import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"
export default function TodoList(){
    return(
        <>
        <ul className="todo__list">
        <TodoItemEmpty/>
        <TodoItem/>
        </ul>
        </>
    )
}