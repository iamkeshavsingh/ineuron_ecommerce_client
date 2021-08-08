import React from 'react'
import Header from '../../components/Header/Header'
import CartList from '../../components/CartList/CartList'
import Loader from '../../components/Loader/Loader'
import { useSelector } from 'react-redux'

function Cart() {

    var { items, total, isLoading } = useSelector((state) => state.cart)
    return (
        <React.Fragment>
            {isLoading && <Loader />}
            <Header />
            {items.length === 0 ? <h3 className="mt-4 text-center">Cart is empty</h3> : <CartList total={total} carts={items} />}
        </React.Fragment>
    )
}


export default Cart;
