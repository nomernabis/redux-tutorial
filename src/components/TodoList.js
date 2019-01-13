import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todos, onTodoClicked}) => (
    <ul>
        {todos.map(todo => <TodoItem key={todo.id} onTodoClicked={() => onTodoClicked(todo.id)} {...todo} />)}
    </ul>
)

export default TodoList