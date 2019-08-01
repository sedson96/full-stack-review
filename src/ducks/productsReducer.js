import axios from "axios";

const initialState = {
    products: []
}

const GET_PRODUCTS = "GET_PRODUCTS"

export function getProducts() {
    let data = axios.get("/api/products")
    return {
        type: GET_PRODUCTS,
        payload: data
    }
}


function reducer(state=initialState, action) {
    const {type, payload} = action

    switch(type) {
        case `${GET_PRODUCTS}_FULFILLED`: 
            return {...state, products: payload.data}
        default: return state
    }
}

export default reducer