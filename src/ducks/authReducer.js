import axios from "axios"

const initialState = {
    username: "",
    password: "",
    id: null,
    error: ""
}


const UPDATE_AUTH = "UPDATE_AUTH"
const LOGIN = "LOGIN"
const REGISTER = "REGISTER"


export function updateAuth(name, value) {
    return {
        type: UPDATE_AUTH,
        payload: {name, value}
    }
}

export function login(username, password) {
    let data = axios.post("/auth/login", {username, password})
    return {
        type: LOGIN,
        payload: data
    }
}
export function register(username, password) {
    let data = axios.post("/auth/register", {username, password})
    return {
        type: REGISTER,
        payload: data
    }
}


function reducer(state = initialState, action) {
    const {type, payload} = action
    switch(type) {
        case UPDATE_AUTH: 
            return {...state, [payload.name]: payload.value, error: ""}
        case `${LOGIN}_FULFILLED`: 
            return {...state, password: "", id: payload.data.id,error: ""}
        case `${REGISTER}_FULFILLED`: 
            return {...state, password: "", id: payload.data.id,error: ""}
        case `${REGISTER}_REJECTED`: 
            return {...state, password: "", username: "", error: "register"}
        case `${LOGIN}_REJECTED`: 
            return {...state, password: "", username: "", error: "login"}
        case `${LOGIN}_PENDING`: 
            return {...state, password: "", username: "", error: ""}
        case `${REGISTER}_PENDING`: 
            return {...state, password: "", username: "", error: ""}
        default: return state
    }
}

export default reducer