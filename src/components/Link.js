import React, { Component } from "react"

const Link = ({ children, active, onFilterClicked }) => {
    if(active){
        return (<span>{ children }</span>)
    }
    
    return (
        <a href="#" 
            onClick={(e) => {
                e.preventDefault()
                onFilterClicked()
            }}>{ children }</a>
    )
}

export default Link