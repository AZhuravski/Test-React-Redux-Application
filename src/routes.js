import { Router, Route, hashHistory, browserHistory } from 'react-router'
import IndexPage from './RouteHandlers/IndexPage'
import React from 'react'

export default (
    <Router history = {browserHistory}>
        <Route path="/articles" component = {IndexPage}/>
    </Router>
)