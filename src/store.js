import {createStore, combineReducers, applyMiddleware} from "redux"
import promise from "redux-promise-middleware"
import authReducer from "./ducks/authReducer"


const rootReducer = combineReducers({
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(promise))

export default store

