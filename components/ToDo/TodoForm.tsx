import React from "react";

const TodoForm = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  setFilter,
  filter
}: any) => {
  // instead of passing in "props", we shortcut by destructuring it and only passing in the "setInputText" prop

  // stuff in here is executed every time handleInput is called
  const handleInput = (e: any) => {
    console.log(e.target.value);
    setInputText(e.target.value); // sets the state of inputText to the value inside of the text box
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (inputText != "") {
      setTodos([
        ...todos,
        { id: Math.random() * 10000, text: inputText, completed: false },
      ]);
      setInputText("");
    }
  };

  const handleFilter = (e: any) => {
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
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoForm;
