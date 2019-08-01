import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {updateAuth, login, register} from "../ducks/authReducer"


class Auth extends Component {
    handleChange = (event) => {
        this.props.updateAuth(event.target.name, event.target.value)
    }   
    handleLogin = (event) => {
        this.props.login(this.props.username, this.props.password)
    }
    handleRegister = (event) => {
        this.props.register(this.props.username, this.props.password)
    }

    render() {
        if(this.props.error === "register") {
            alert("Username already taken")
        } else if(this.props.error === "login") {
            alert("incorrect username or password")
        }
        console.log(this.props)
        return(
            <>
            {this.props.id ? <Redirect to="/" /> : null}
                <h1>Welcome</h1>
                <label>
                    username
                    <input onChange={this.handleChange} name="username" placeholder="username" />
                </label>
                <label>
                    password
                    <input onChange={this.handleChange} name="password" placeholder="password" />
                </label>

                <button>Cancel</button>
                <button onClick={this.handleRegister}>Register</button>
                <button onClick={this.handleLogin}>Login</button>
            </>
        )
    }
}

let mapStatetoProps = (reduxState) => {
    return {
        username: reduxState.auth.username,
        password: reduxState.auth.password,
        id: reduxState.auth.id,
        error: reduxState.auth.error
    }
}

export default connect(mapStatetoProps, {updateAuth,login,register})(Auth)