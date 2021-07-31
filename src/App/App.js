import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { initialAuthCheck } from '../store/actions/auth/auth.action';
import AppRoutes from './AppRoutes'

function App() {

    var dispatch = useDispatch();

    useEffect(() => {
        dispatch(initialAuthCheck())
    }, []);

    return (
        <AppRoutes />
    )
}

export default App
