import Button from "./Button.jsx";
import Checkbox from "./Checkbox.jsx";
export default function TodoItem(){
    return(
        <>
         <li className="todo__item todo__item--complete">
            <Checkbox id="1">지각 하기</Checkbox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
        </>
    )
}