import React, { Component, PropTypes } from 'react'

class JqueryComponent extends Component {
    componentDidMount() {
        console.log('---', 'do some jquery magic with', this.refs.container);
    }
    render() {
        return (
            <div ref = "container"/>
        )
    }
}

export default JqueryComponent