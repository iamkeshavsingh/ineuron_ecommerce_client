import React from 'react'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import CartList from '../../components/CartList/CartList'

function Cart({ carts, total }) {
    return (
        <React.Fragment>
            <Header />
            <CartList total={total} carts={carts} />
        </React.Fragment>
    )
}


var mapStateToProps = (state) => {
    return {
        carts: state.cart.items,
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(Cart)
