import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import TodoForm from "../components/ToDo/TodoForm";
import TodoList from "../components/ToDo/TodoList";

const Todo: NextPage = () => {
  {
    /* A new "state" is initialized here, namely, that storing the information
      about the input text inside of the form component (although we can access it
      anywhere in the app). */
  }
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredList, setFilteredList] = useState([]);

  // This useEffect basically runs handleFilteredList every time either 'todos' or 'filter' are updated
  useEffect(() => {
    handleFilteredList();
  }, [todos, filter])

  // This function basically creates a filtered list of todos based on their completed-ness,
  // and that filtered list is passed as the filteredList prop to the todoList component, which renders it
  const handleFilteredList = () => {
    switch (filter) {
      case "Completed":
        setFilteredList(todos.filter((todo: any) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredList(todos.filter((todo: any) => todo.completed === false));
        break;
      default:
        setFilteredList(todos);
        break;
    }
  };

  return (
    <>
      <div className="container mx-auto mt-12 flex justify-center">
        {/* Here we pass in a prop we will call "setInputText" (can be called anything),
          the content of this prop will be the setInputText function, which we will
          then be able to access from whatever component the prop is passed to, in this case
          it will be the TodoForm component */}
        <TodoForm
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          setFilter={setFilter}
        />
      </div>
      <div className="container mx-auto mt-8 flex flex-column justify-center">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredList={filteredList}
        />
      </div>
    </>
  );
};

export default Todo;
