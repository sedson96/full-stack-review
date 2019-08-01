import React, {Component} from "react"
import Navbar from "./Navbar"
import Products from "./Products";

class Shop extends Component {
    render() {
        return(
            <>
            <Navbar/>
            <Products/>
            </>
        )
    }
}

export default Shop 