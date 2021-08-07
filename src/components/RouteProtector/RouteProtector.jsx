import React from 'react'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'

function RouteProtector({ isLoggedIn, children }) {
    var location = useLocation();
    var path = location.pathname;
    return !isLoggedIn ? <Redirect to={{
        pathname: '/auth',
        search: `?redirectUrl=${path}`
    }} /> : children;
}



var mapStateToProps = (state) => {

    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
}


export default connect(mapStateToProps)(RouteProtector)
