import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'

const reducer = (state, action) => {
    state = counterReducer(state, action)
    // state = userReducer(state, action)
    // state = ticketsReducer(state, action)
    return state
}

const counterReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        break
        case 'RECEIVE_COUNTER_VALUE':
            return {
                ...state,
                counter: action.value
            }
        break
    }
    return state
}

const initialState = {
    message: 'I am a dope counter',
    counter: 0
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
    return (
        <div>
            <Title />
            <Counter />
            <IncrementCounter />
        </div>
    )
}

function Title(){
    console.log('rendering title')
    const message = useSelector( state => state.message )
    return (
        <h1>{message}</h1>
    )
}


function Counter(){
    console.log('rendering Counter')
    const counter = useSelector( state => state.counter )
    const dispatch = useDispatch()
    // If we useEffect to act like componentDidMount, pass in an empty array
    useEffect(() => {
        fetch('http://localhost:3000/counter')
            .then( res => res.json())
            .then( counter => {
                dispatch({ type: 'RECEIVE_COUNTER_VALUE', value: counter.value })
            })
    }, [])
    return (
        <h3>{counter}</h3>
    )
}

function IncrementCounter(){
    console.log('rendering Increment Button')
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch({ type: 'INCREMENT_COUNTER'})}>
            Increment Counter
        </button>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
