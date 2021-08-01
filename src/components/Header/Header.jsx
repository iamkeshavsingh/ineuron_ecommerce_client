import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './Header.css'

function Header({ isLoggedIn, user, noOfCartItems }) {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link className="brand" to="/">MyStore.com</Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end">
                        {isLoggedIn ? (
                            <React.Fragment>
                                <Link className="link">
                                    <Navbar.Text>
                                        Sign In As: {user.name}
                                    </Navbar.Text>
                                </Link>
                                <Link className="link">
                                    <Link className="link" to="/cart">Cart {noOfCartItems}</Link>
                                </Link>
                                <Link className="link" href="#pricing">Logout</Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Link className="link" to="/">Products</Link>
                                <Link className="link" to="/auth">Signin/Signup</Link>
                            </React.Fragment>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

var mapStateToProps = (state) => {

    return {
        isLoggedIn: state.auth.isLoggedIn,
        user: state.auth.user,
        noOfCartItems: state.cart.items.length
    }
}

export default connect(mapStateToProps)(Header)