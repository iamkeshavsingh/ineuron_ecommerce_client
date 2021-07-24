import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Signin from './components/SignIn/Signin'
import Signup from './components/SignUp/Signup'

function AuthPage() {
    return (
        <Container className="mt-4">
            <Row>
                <Signin />
                <Signup />
            </Row>
        </Container>
    )
}

export default AuthPage
