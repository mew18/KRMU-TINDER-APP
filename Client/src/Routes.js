import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from './History'

import Male from './Genders/male'
import Female from './Genders/female'
import Both from './Genders/both'

import App from './App'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/DisplayM" component={Male} />
                    <Route path="/DisplayF" component={Female}/>
                    <Route path="/DisplayB" component={Both}/>
                </Switch>
            </Router>
        )
    }
}