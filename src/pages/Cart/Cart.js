import React from 'react'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import CartList from '../../components/CartList/CartList'
import Loader from '../../components/Loader/Loader'

function Cart({ carts, total, isLoading }) {
    return (
        <React.Fragment>
            {isLoading && <Loader />}
            <Header />
            {carts.length === 0 ? <h3 className="mt-4 text-center">Cart is empty</h3> : <CartList total={total} carts={carts} />}
        </React.Fragment>
    )
}


var mapStateToProps = (state) => {
    return {
        carts: state.cart.items,
        total: state.cart.total,
        isLoading: state.cart.isLoading
    }
}

export default connect(mapStateToProps)(Cart)
