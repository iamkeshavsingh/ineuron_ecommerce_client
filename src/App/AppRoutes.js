import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import Auth from '../pages/Auth/Auth.page'

function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
