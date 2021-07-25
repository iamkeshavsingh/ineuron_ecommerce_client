import React from 'react'
import { Button, Card } from 'react-bootstrap'

import './Product.css'

function Product({ title, description, price, imageUrl }) {
    return (
        <Card style={{ width: '18rem' }} className="Product">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
