const counter = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    return { getState, subscribe, dispatch }
}

const Counter = ({ value, onIncrement, onDecrement }) => (
    <div>
        <h1>{value}</h1><br />
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
    </div>
)

const render = () => {
    ReactDOM.render(
        <Counter 
            value={store.getState() ? store.getState() : 0}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        />,
        document.getElementById('root')
    )
}

const store = createStore(counter)

store.subscribe(
    render
)
render()
