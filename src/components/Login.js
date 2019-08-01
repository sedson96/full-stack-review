import React, {Component} from "react"
import Navbar from "./Navbar";
import Auth from "./Auth"

class Login extends Component {
    render() {
        return(
            <>
                <Navbar/>
                <Auth />
           </>
        )
    }
}

export default Login 