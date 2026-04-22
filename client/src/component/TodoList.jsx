import TodoItemEmpty from "./TodoItemEmpty"
import TodoItem from "./TodoItem"

export default function TodoList({todos}){
    return(
        <ul className="todo__list">
        {/* 아무것도 없을 때, */}
        {todos.length === 0 && <TodoItemEmpty />}
        {/* 아무것도 없지 않을 떄 */}
        {todos.length > 0 && todos.map((todo)=>
            <TodoItem key={todo.id} todo={todo}/>
        )};
        </ul>
    )
}