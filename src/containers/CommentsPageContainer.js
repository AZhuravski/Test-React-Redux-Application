import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { LOADING } from '../constants'

class CommentsPagination extends Component {
    static propTypes = {
        comments: PropTypes.any
    };

    render() {
        const { comments } = this.props
        if (comments == LOADING) return <h3>Loading...</h3>
        const items = comments.map((comment) => <li key = {comment.id}>{comment.text}</li>)
        return <ul>{items}</ul>
    }
}

function getState(stores, props) {
    return {
        comments: stores.comments.getOrLoadForPage(props.page)
    }
}

export default connectToStore(['comments'], getState)(CommentsPagination)