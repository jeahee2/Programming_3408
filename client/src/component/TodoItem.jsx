import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";

export default function TodoItem({todo, toggleTodo, deleteTodo}){
    return(
        //todo.iscompleted가 참이면 "todo__item--complete" 아니면 ""
        <>
<li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>            <Checkbox 
                id={todo.id}
                onChange={()=>toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button 
                className="todo__button todo__button--delete"
                onClick = {()=> deleteTodo(todo.id)}
            >❌</Button>
        </li>
        </>
    )
}