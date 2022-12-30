import React from "react";

const TodoForm = ({ todos, setTodos, inputText, setInputText }: any) => {
  // instead of passing in "props", we shortcut by destructuring it and only passing in the "setInputText" prop

  // stuff in here is executed every time handleInput is called
  const handleInput = (e: any) => {
    console.log(e.target.value);
    setInputText(e.target.value); // sets the state of inputText to the value inside of the text box
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false }]);
    setInputText("");
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
            className="btn btn-accent ml-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
