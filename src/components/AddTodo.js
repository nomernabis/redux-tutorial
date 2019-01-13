import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions"

let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <input ref={node => input = node}></input>
                <button onClick={() => {
                    if(input.value !== ""){
                        dispatch(addTodo(input.value))
                    } else {
                        alert('Cant add empty text!')
                    }
                    input.value = ''
                }}>Add Todo</button>
        </div>
    )
}

AddTodo = connect()(AddTodo)
export default AddTodo