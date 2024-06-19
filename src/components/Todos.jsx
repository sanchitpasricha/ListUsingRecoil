import { listFilter } from "../store/selectors/todoFilter";
import { useRecoilValue } from "recoil";

export function Todos() {
  const todos = useRecoilValue(listFilter);
  return (
    <div>
      <h2>To Do List</h2>
      <ul className="todos">
        {todos.map((todo, index) => {
          return (
            <li key={index} className="todo-item">
              <span className="todo-text">{todo.title}:</span>{" "}
              <span className="todo-delete">{todo.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
