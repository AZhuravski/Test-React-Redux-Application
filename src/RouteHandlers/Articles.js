import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default Articles