import React from "react"
import {Switch, Route} from "react-router-dom"
import Checkout from "./components/Checkout"
import Shop from "./components/Shop"
import Login from "./components/Login"

export default (
    <Switch>
        <Route  path="/checkout" component={Checkout} />
        <Route  path="/login" component={Login} />
        <Route  path="/product/:id" component={Login} />
        <Route exact path="/" component={Shop} />
    </Switch>
)