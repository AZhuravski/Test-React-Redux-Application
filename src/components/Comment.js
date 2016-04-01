import React, { Component, PropTypes } from 'react'

class Comment extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                {this.props.comment.text}
            </div>
        )
    }
}

export default Comment