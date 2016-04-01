import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'

class CommentList extends Component {
    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        const text = this.props.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.props.toggleOpen}>{text}</a>
    }

    getBody() {
        const { comments } = this.props
        if (!this.props.isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>{commetItems}</ul>
    }
}

export default toggleOpen(CommentList)