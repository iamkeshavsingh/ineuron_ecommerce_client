import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

function RouteProtector({ isLoggedIn, children }) {
    return !isLoggedIn ? <Redirect to="/auth" /> : children;
}



var mapStateToProps = (state) => {

    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
}


export default connect(mapStateToProps)(RouteProtector)
