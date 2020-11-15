import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './History'
import Gender from './Genders/gender'

import App from './App/App'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    {/* // try running return render here: */}
                    <Route path="/DisplayM" component={() => (< Gender type="male" />)} />
                    <Route path="/DisplayF" component={() => (< Gender type="female" />)} />
                    <Route path="/DisplayB" component={() => (< Gender type="both" />)} />
                </Switch>
            </Router>
        )
    }
}