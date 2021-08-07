import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { getOrderId } from '../../utils/global.util'
import CartItem from '../CartItem/CartItem'

function CartList({ carts, total }) {

    function payment_success(payload) {
        console.log(payload)
    }

    function payment_failed() {
        console.log('Payment Failed')
    }

    function handleCheckout() {
        getOrderId(1500)
            .then(data => {
                var options = {
                    ...data,
                    handler: payment_success,
                    prefill: {
                        email: 'test@test.com',
                        contact: 8900000000,
                        name: 'John Doe'
                    }
                }

                var rpay = new window.Razorpay(options);
                rpay.open();

                rpay.on('payment.failed', payment_failed)
            })
    }

    return (
        <React.Fragment>
            <div style={{ margin: '50px 40px' }}>
                <h3>My Cart</h3>
                {carts.map(cart => <CartItem {...cart} />)}
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md="3" className="d-flex flex-column align-items-center">
                        <p>Total: {total}</p>
                        <Button onClick={handleCheckout} variant="primary">Order Now</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CartList
