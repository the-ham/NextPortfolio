import React, { BaseSyntheticEvent, SyntheticEvent } from "react";
import { Todo } from "../../pages/todo";
import { Filter } from "../../pages/todo";
import { Filters } from "../../pages/todo";

export interface TodoFormProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

const TodoForm = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  setFilter,
}: TodoFormProps) => {
  // instead of passing in "props", we shortcut by destructuring it and only passing in the "setInputText" prop

  // stuff in here is executed every time handleInput is called
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputText(e.target.value); // sets the state of inputText to the value inside of the text box
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputText != "") {
      setTodos([
        ...todos,
        { id: Math.random() * 10000, text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const handleFilter = (e: BaseSyntheticEvent) => {
    console.log(e);
    setFilter(e.target.value);
  };

  return (
    <>
      <form>
        <div className="flex">
          <input
            value={inputText}
            onChange={handleInput} // every time the input box changes, handleInput is called
            type="text"
            placeholder="Type here"
            className="input input-bordered border-2 input-primary w-full max-w-xs"
          />
          <button
            onClick={handleSubmit}
            className="btn btn-outline border-2 btn-ghost ml-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <select
        onChange={handleFilter}
        className="select select-ghost max-w-xs ml-3"
      >
        <option value={Filters.All}>{Filters.All}</option>
        <option value={Filters.Completed}>{Filters.Completed}</option>
        <option value={Filters.Uncompleted}>{Filters.Uncompleted}</option>
      </select>
    </>
  );
};

export default TodoForm;
