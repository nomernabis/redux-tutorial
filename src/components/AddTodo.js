import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions"

let AddTodo = ({ dispatch }) => {
    let input
    const onAddTodoClicked = () => {
        if(input.value !== ""){
            dispatch(addTodo(input.value))
        } else {
            alert('Cant add empty text!')
        }
        input.value = ''
    }
    return (
        <div>
            <input ref={node => input = node} onKeyPress={(e) => {
                if(e.key === 'Enter'){
                    onAddTodoClicked()
                }
            }}></input>
                <button onClick={onAddTodoClicked}>Add Todo</button>
        </div>
    )
}

AddTodo = connect()(AddTodo)
export default AddTodo