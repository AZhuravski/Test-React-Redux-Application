import React, { Component, PropTypes } from 'react'

class Articles extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                Some navigation
                {this.props.children}
            </div>
        )
    }
}

export default Articles