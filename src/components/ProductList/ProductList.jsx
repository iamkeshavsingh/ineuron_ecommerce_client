import React from 'react'
import Product from '../Product/Product'

import './ProductList.css'

function ProductList({ products }) {
    return (
        <div className="ProductList">
            {products.map(product => <Product {...product} />)}
        </div>
    )
}

export default ProductList
