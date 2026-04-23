import { useState } from 'react';
import './todolist.css'
// import TodoItemEmpty from './component/TodoItemEmpty.jsx';
// import Button from './component/Button.jsx';
// import Checkbox from './component/Checkbox.jsx';
import TodoHeader from './component/TodoHeader.jsx';
import TodoAdder from './component/TodoAdder.jsx';
// import TodoItem from './component/TodoItem.jsx'
import TodoList from './component/TodoList.jsx'

class Todo{
  constructor(text){
    this.id=Date.now(); //id;고유의 값. new Date().getTime()
    this.text=text;     //할 일 내용
    this.isCompleted = false; //완료 여부: 미완
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]) //할 일 목록 저장 state, 기본값
  function addTodo(text){
    setTodos((todos)=>[
    //이전 todos 가져오기
    //하나씩 꺼내서 새로운 리스트 만들기
    ...todos,
    //뒤에 new Todo 만들어서 추가하자
    new Todo(text)
    ]);
  
  }

  //function addTodo(text) {setTodos((todos)=>[...todos, new Todo(text)])};
    function toggletTodo(id){
      // todos에서 하나씩 꺼내서 todo의 id가 id와 같으면, !이전 isCompleted
      setTodos((todos)=>
        todos.map((todo)=>
          todo.id===id?{...todo, isCompleted: !todo.isCompleted}:todo
        )
      )
    }
    function deleteTodo(id){
      // todos 하나씩 꺼내어 todo의 id가 다른 todo만 남기자
      setTodos((todos)=>
        todos.filter((todo)=> todo.id !== id)
      )
    }
    return(
      <div className ="todo">
        <TodoHeader/>
        <TodoAdder addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggletTodo} deleteTodo={deleteTodo}/>
        </div>
    )
}
export default TodoListApp;