import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./Navbar.scss"

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            slide: "hide-side"
        }
    }
    handleSlide = () => {
        if (this.state.slide === "hide-side") {
            this.setState({slide: "side-nav-container"})
        } else {
            this.setState({slide: "hide-side"})

        }
    }
    render() {
        return(
            <>
                <header>
                    <div className="header-container">
                        <div className="logo-container">
                            <i className="material-icons">shopping_cart</i>
                            <h1>54th Street</h1>
                        </div>
                        <nav className="nav-links">
                            <Link to="/login"><h2>Login</h2></Link>
                            <Link to="/"><h2>Shop</h2></Link>
                            <Link to="/checkout"><h2>Checkout</h2></Link>
                        </nav>
                        <div onClick={this.handleSlide} className="ham-button">
                            <i className="material-icons">menu</i>
                        </div>
                    </div>
                </header>

                <aside className={this.state.slide}>
                    <div>
                        <Link to="/login"><h2>Login</h2></Link>
                        <Link to="/"><h2>Shop</h2></Link>
                        <Link to="/checkout"><h2>Checkout</h2></Link>
                    </div>
                </aside>
            </>
        )
    }
}

export default Navbar 