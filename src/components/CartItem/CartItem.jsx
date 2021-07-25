import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CartItem({ title, price, imageUrl, quantity, id }) {
    return (
        <div style={{ margin: '20px', padding: '10px' }}>
            <Card className="flex-row">
                <Card.Img variant="left" width="300px" src={imageUrl} />
                <Card.Body className="d-flex justify-content-center align-items-center p-3">
                    <Button variant="primary">+</Button>
                    <p style={{ margin: '0px 10px' }}>{quantity}</p>
                    <Button variant="danger">-</Button>
                </Card.Body>
                <div className="d-flex flex-column justify-content-center p-3">
                    <Card.Text>
                        Price: {price * quantity}
                    </Card.Text>
                </div>
            </Card>
        </div>
    )
}

export default CartItem
