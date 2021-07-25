import React from 'react'
import { Col, Form, Button, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

// Assignment: 
// TODO: Put on the custom validations in SignUp Component

function Signup() {

    var { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <Col style={{ flex: 0.5 }}>
            <div className="text-center heading">
                SignUp
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-3 p-2">
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                {...register("name", {
                                    required: true,
                                })}
                            />
                            {errors.name?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Name is Required.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter Email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            {errors.email?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Email is Required.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Username"
                                {...register("username", {
                                    required: true,
                                })}
                            />
                            {errors.username?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Username is Required.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Mobile"
                                {...register("mobile", {
                                    required: true,
                                })}
                            />
                            {errors.mobile?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Mobile is Required.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter Password"
                                {...register("password", {
                                    required: true
                                })}
                            />
                            {errors.password?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Password is Required.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Confirm Password"
                                {...register("cpassword", {
                                    required: true,
                                })}
                            />
                            {errors.cpassword?.type === 'required' && (
                                <Form.Text className="text-muted">
                                    Please Confirm your Password.
                                </Form.Text>
                            )}
                        </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </Col>
    )
}

export default Signup
