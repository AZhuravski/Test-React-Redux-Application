import React, { Component, PropTypes } from 'react'
import CommentsPagination from '../containers/CommentsPagination'

class CommentsRoot extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <CommentsPagination />
                {this.props.children}
            </div>
        )
    }
}

export default CommentsRoot