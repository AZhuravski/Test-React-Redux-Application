import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Link to="/articles/new">New article</Link>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default Articles