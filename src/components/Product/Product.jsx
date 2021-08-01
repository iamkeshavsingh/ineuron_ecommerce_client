import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart/cart.action';

import './Product.css'

function Product({ name, description, price, images, id }) {

    var dispatch = useDispatch();

    return (
        <Card style={{ width: '18rem' }} className="Product">
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>Price: {price}</Card.Text>
                <Button onClick={() => dispatch(addToCart(id))} variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
