import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        const text = this.state.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.toggleOpen}>{text}</a>
    }

    toggleOpen = (ev) => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        const { comments } = this.props
        if (!this.state.isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>{commetItems}</ul>
    }
}

export default CommentList