import React, {Component} from "react"
import {connect} from "react-redux"
import {getProducts} from "../ducks/productsReducer"
import Product from "./Product";
import styles from "./products.module.scss"
 
class Products extends Component {
    componentDidMount() {
        this.props.getProducts()
    }
    render() { 

        let displayProducts = this.props.products.map(product => {
            return (
                <Product product={product} />
            )
        })
        console.log(this.props)
        return(
            <>
            <h1>Products</h1>
            <div className={styles.products}>
                {displayProducts}
            </div>

            </>
        )
    }
}

let mapStatetoProps = (reduxState) => {
    return {
        products: reduxState.products.products
    }
}


export default connect(mapStatetoProps, {getProducts})(Products)