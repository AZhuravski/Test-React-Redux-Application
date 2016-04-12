import React, { Component, PropTypes } from 'react'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h3>Article page {this.props.params.id}</h3>
            </div>
        )
    }
}

export default ArticlePage