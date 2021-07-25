import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import './Header.css'

function Header({ isLoggedIn }) {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">MyStore.com</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end">
                        {isLoggedIn ? (
                            <React.Fragment>
                                <Link className="link">
                                    <Navbar.Text>
                                        Sign In As: John
                                    </Navbar.Text>
                                </Link>
                                <Link className="link">
                                    <Link className="link" to="/cart">Cart</Link>
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
    }
}

export default connect(mapStateToProps)(Header)