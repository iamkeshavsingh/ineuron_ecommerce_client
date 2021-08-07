import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../../components/Header/Header'
import Signin from './components/SignIn/Signin'
import Signup from './components/SignUp/Signup'
import { connect } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom'
import queryString from 'query-string'

function AuthPage({ isLoggedIn }) {

    var location = useLocation()
    var redirectUrl = queryString.parse(location.search).redirectUrl;
    redirectUrl = redirectUrl || '/';
    if (isLoggedIn) return <Redirect to={redirectUrl} />

    return (
        <React.Fragment>
            <Header />
            <Container className="mt-4">
                <Row className="justify-content-between">
                    <Signin />
                    <Signup />
                </Row>
            </Container>
        </React.Fragment>
    )
}

var mapStateToProps = (state) => {

    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
}

export default connect(mapStateToProps)(AuthPage)
