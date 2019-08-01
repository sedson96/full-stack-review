import {createStore, combineReducers, applyMiddleware} from "redux"
import promise from "redux-promise-middleware"
import authReducer from "./ducks/authReducer"
import productReducer from "./ducks/productsReducer"


const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer
})

const store = createStore(rootReducer, applyMiddleware(promise))

export default store

