const { createStore } = Redux

const reducer = (state, action) => {

    state = userReducer(state, action)

    return state
}

const userReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_USER': 
            return { userName: action.name }
        break;
    }
    return state
}

const initialState  = {
    userName: ''
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const action = { type: 'LOGIN_USER', name: 'Raúl' }

store.dispatch(action)