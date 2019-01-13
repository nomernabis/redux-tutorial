import React, { Component } from "react"

const TodoItem = ({text, onTodoClicked, completed }) => (
    <li 
        style={{textDecoration: completed ? 'line-through': 'none'}}
        onClick={onTodoClicked}>{text}</li>
)

export default TodoItem