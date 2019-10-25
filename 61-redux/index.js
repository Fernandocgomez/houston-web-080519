const { createStore } = Redux
// const createStore = Redux.createStore

const initialState  = {
    userName: ''
}
console.log('initialState', initialState)
const reducer = (state, action) => {
    console.log('reducing', state, action)
    switch(action.type){
        case 'LOGIN_USER': 
            console.log('Logging in the user')
            return { userName: action.name }
        break;
    }
    return state
}

const store = createStore(
    reducer, // reducer
    initialState,  // initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // middleware
)