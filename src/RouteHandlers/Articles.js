import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'

class Articles extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        style: PropTypes.object
    }

    state = {
        style: { color: 'green'}
    }

    getChildContext() {
        return this.state
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href="#" onClick = {this.changeColor('red')}>red</a></li>
                    <li><a href="#" onClick = {this.changeColor('green')}>green</a></li>
                    <li><a href="#" onClick = {this.changeColor('blue')}>blue</a></li>
                </ul>
                <h3 onClick={this.redirectToNew}>New article</h3>
                <Navigation />
                {this.props.children}
            </div>
        )
    }

    changeColor = color => ev => {
        ev.preventDefault()
        this.setState({ style: { color } })
    }

    redirectToNew = (ev) => {
        this.props.history.push('/articles/new')
    }
}

export default Articles