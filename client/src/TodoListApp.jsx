import './todolist.css'
// import TodoItemEmpty from './component/TodoItemEmpty.jsx';
// import Button from './component/Button.jsx';
// import Checkbox from './component/Checkbox.jsx';
import TodoHeader from './component/TodoHeader.jsx';
import TodoAdder from './component/TodoAdder.jsx';
// import TodoItem from './component/TodoItem.jsx'
import TodoList from './component/TodoList.jsx'
function TodoListApp() {
  return (
    <div className="todo">
        <TodoHeader/>
        <TodoAdder/>
        <TodoList/>
    </div>
  )
}
export default TodoListApp;