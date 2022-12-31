import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}: any) => {

  return (
    <div>
      {todos.map((todo: any) => (
        <Todo key={todo.id} text={todo.text} completed={todo.completed} todos={todos} setTodos={setTodos} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
