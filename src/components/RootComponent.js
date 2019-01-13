import React, { Component } from "react"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import logger from "redux-logger"

import { todos, visibilityFilter } from '../reducers'

import TodoApp from "./TodoApp"

import "../styles/App.css"

const store = createStore(combineReducers({ todos, visibilityFilter }), applyMiddleware(logger))

class RootComponent extends Component{
    render() {
        return (
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
    }
}

export default RootComponent