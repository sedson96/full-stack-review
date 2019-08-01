import React from "react" 
import {Link} from "react-router-dom"

function Product(props) {
    const {product} = props
    return (
        <>
            
            <h1>{product.name}</h1>
            <Link to={`/product/${product.product_id}`}><img src={product.image_url} alt={product.name} /></Link>
        </>
    )
}

export default Product