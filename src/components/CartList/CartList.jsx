import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import CartItem from '../CartItem/CartItem'

function CartList({ carts, total }) {
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
                        <Button variant="primary">Order Now</Button>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default CartList
