import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'
import { addComment } from '../AC/comments'

class CommentList extends Component {
    state = {
        commentText: ''
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
        const text = this.props.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.props.toggleOpen}>{text}</a>
    }

    getBody() {
        const { article, isOpen } = this.props
        const comments = article.getRelation('comments')
        if (!isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>
                {commetItems}
                <li>{this.getCommentInput()}</li>
            </ul>
    }

    getCommentInput() {
        return <form onSubmit={this.addComment}>
            <label>new comment: </label>
            <input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
        </form>
    }

    addComment = (ev) => {
        ev.preventDefault()
        addComment(this.state.commentText, this.props.article.id)
        this.setState({
            commentText: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)