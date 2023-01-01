import React, { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import TodoForm from "../components/ToDo/TodoForm";
import TodoList from "../components/ToDo/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export enum Filters {
  "All" = "All",
  "Completed" = "Completed",
  "Uncompleted" = "Uncompleted"
}

export type Filter = "All" | "Completed" | "Uncompleted"

const Todo: NextPage = () => {
  {
    /* A new "state" is initialized here, namely, that storing the information
      about the input text inside of the form component (although we can access it
      anywhere in the app). */
  }
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>(Filters.All);
  const [filteredList, setFilteredList] = useState<Todo[]>([]);

  // useRef creates an object: {current: _value_},
  // which persists between renders and whose updating itself does not cause a re-render.
  // We use this feature to create a variable "initialRender", that tracks whether it is
  // the first time the page has been loaded up.
  const initialRender = useRef<boolean>(true);

  // calls getLocalTodos upon initial load
  useEffect((): void => {
    getLocalTodos();
  }, []);

  // This useEffect basically runs handleFilteredList every time either 'todos' or 'filter' are updated
  useEffect(() => {
    // This function basically creates a filtered list of todos based on their completed-ness,
    // and that filtered list is passed as the filteredList prop to the todoList component, which renders it
    const handleFilteredList = (): void => {
      switch (filter) {
        case "Completed":
          setFilteredList(todos.filter((todo: Todo) => todo.completed === true));
          break;
        case "Uncompleted":
          setFilteredList(
            todos.filter((todo: Todo) => todo.completed === false)
          );
          break;
        default:
          setFilteredList(todos);
          break;
      }
    };

    // saves current state of todos into localStorage
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    handleFilteredList();

    // if this is the initial rendering of the page, useEffect is exited early and initialRender is set to false.
    if (initialRender.current) {
      initialRender.current = false;
      return; // exits the useEffect early, a.k.a. todos is not saved to localStorage
    }

    // Otherwise, todos are saved to localStorage.
    saveLocalTodos();
  }, [todos, filter]);

  // If localStorage is empty, initialize "todos"(the localStorage variable not the state) to [], otherwise set state of todos using it
  const getLocalTodos = (): void => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("todos") || "{}");
      setTodos(todosLocal);
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
