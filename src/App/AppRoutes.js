import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import Auth from '../pages/Auth/Auth.page'
import Cart from '../pages/Cart/Cart'
import RouteProtector from '../components/RouteProtector/RouteProtector'

function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/cart" render={(props) => (
                    <RouteProtector>
                        <Cart {...props} />
                    </RouteProtector>
                )} />
            </Switch>
        </Router>
    )
}

export default AppRoutes
