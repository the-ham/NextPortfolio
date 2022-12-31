import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}: any) => {

  return (
    <div>
      {todos.map((todo: any) => (
        // We need to pass the props of each todo into the corresponding todo component:
        // id -> for selecting the correct todo for checking or deletion
        // completed -> so that we can flip the completed status in the check handler
        // 'setTodos' -> so that we can update the entire array of todos to reflect changes, directly from each todo
        // 'todos' -> so that setTodos has the original array of todos to update from (via methods like map and filter)
        // 'todo' -> so that each todo component is aware of which 'todo' object they represent, so that things like "id" and "completed" can be checked against the todos array
        <Todo key={todo.id} text={todo.text} completed={todo.completed} todos={todos} setTodos={setTodos} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
