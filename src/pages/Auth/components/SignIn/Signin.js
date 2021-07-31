import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { signinAction } from '../../../../store/actions/auth/auth.action';

import './Signin.css'

function Signin() {

    var { register, handleSubmit, formState: { errors } } = useForm();
    var dispatch = useDispatch();
    var { signinError } = useSelector(({ auth }) => ({ signinError: auth.signinError }));

    function onSubmit(data) {
        dispatch(signinAction(data.username, data.password));
    }

    return (
        <Col style={{ flex: 0.4 }}>
            <div className="text-center heading">
                SignIn
            </div>
            {signinError && <div>{signinError}</div>}
            <Form onSubmit={handleSubmit(onSubmit)} className="mt-3 p-2">
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    )
}

export default Signin
