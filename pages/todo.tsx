import React, { useState } from "react";
import type { NextPage } from "next";
import TodoForm from "../components/ToDo/TodoForm";

const Todo: NextPage = () => {
  {
    /* A new "state" is initialized here, namely, that storing the information
      about the input text inside of the form component (although we can access it
      anywhere in the app). */
  }
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <>
      <div className="container mx-auto flex justify-center">
        {/* Here we pass in a prop we will call "setInputText" (can be called anything),
          the content of this prop will be the setInputText function, which we will
          then be able to access from whatever component the prop is passed to, in this case
          it will be the TodoForm component */}
        <TodoForm todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      </div>
      <br />
      <div className="container mx-auto flex justify-center">{inputText}</div>
    </>
  );
};

export default Todo;
