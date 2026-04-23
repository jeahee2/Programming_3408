import Button from "./Button.jsx";
import { useState } from "react";

export default function TodoAdder({addTodo}){
    const [inputTodo, setInputTodo] = useState('');
    function handleSubmit(event) {
        event.preventDefault();     //submit 기본 동작 막자
        //사용자가 입력하는 것은 항상 주의 필요!!!
        //사용자입력 :user's way
        if(!inputTodo.trim()) return;   //빈칸이면 return

        //addTodo(text)
        //Text;1 input 요소의 valus, 2. input vlaue를 state
        addTodo(inputTodo);
        setInputTodo('');
    }

    return(
        <>
            <form className="todo__form" onSubmit={handleSubmit}>
                <input 
                type="text" 
                className="todo__input" 
                placeholder='할 일을 입력하세요.'
                value={inputTodo}
                onChange={(event)=>setInputTodo(event.target.value)}
                />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
        </>
    )
}