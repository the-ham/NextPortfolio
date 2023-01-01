import React from "react";
import { Todo } from "../../pages/todo";

export interface TodoProps {
  key: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ todo, todos, setTodos }: TodoProps) => {
  const handleCheck = () => {
    setTodos(
      todos.map((e: any) => {
        if (e.id === todo.id) {
          return { ...e, completed: !e.completed };
        }
        return { ...e };
      })
    );
  };

  const handleDelete = () => {
    setTodos(todos.filter((e: any) => e.id !== todo.id)); // Recreates the Todos array by filtering out the todo we want to delete
  };

  return (
    <>
      <div className="alert shadow-lg mb-4 max-w-7xl">
        <span className="max-w-5xl overflow-x-hidden">{todo.text}</span>
        <div className="flex-none">
          <button
            onClick={handleCheck}
            className={`btn btn-sm ${
              todo.completed ? "btn-ghost" : "btn-primary"
            }`}
          >
            Check
          </button>
          <button onClick={handleDelete} className="btn btn-sm btn-secondary">
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
