import React from "react";
import { TodoListProps } from "./types";

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
}) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {todos.map((todo) => (
        <li>
          <label className={todo.complete ? "complete" : undefined}>
            <input
              type="checkbox"
              onChange={() => toggleComplete(todo)}
              checked={todo.complete}
            />
            {todo.text}
          </label>
        </li>
      ))}
    </ul>
  );
};
