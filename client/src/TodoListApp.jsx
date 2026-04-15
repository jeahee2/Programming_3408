import './todolist.css'
import TodoItemEmpty from './component/TodoItemEmpty.jsx';
import Button from './component/Button.jsx';
import Checkbox from './component/Checkbox.jsx';
function TodoListApp() {
  return (
    <div className="todo">
      <h1 className="todo__title">HyeonDo List</h1>
      <form className="todo__form">
        <input type="text" className="todo__input" placeholder='할 일을 입력하세요.'/>
        <Button type="submit" className="todo__button todo__button--add">Add</Button>
      </form>
      <ul className="todo__list">
        <TodoItemEmpty/>
        <li className="todo__item todo__item--complete">
          <Checkbox id="1">지각 하기</Checkbox>
          <Button className="todo__button todo__button--edit">✏️</Button>
          <Button className="todo__button todo__button--delete">❌</Button>
        </li>
      </ul>
    </div>
  )
}
export default TodoListApp;