import React, { Component, PropTypes } from 'react'
require('./style.css')

class Comment extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="comment-body">
                {this.props.comment.text}
            </div>
        )
    }
}

export default Comment