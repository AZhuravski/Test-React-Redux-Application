import React from 'react'
import Comment from './Comment/index'
import toggleOpen from '../mixins/toggleOpen'

const CommentListOld = React.createClass({
    mixins: [toggleOpen],
    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    },

    getLink() {
        const text = this.state.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.toggleOpen}>{text}</a>
    },

    getBody() {
        const { comments } = this.props
        if (!this.state.isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>{commetItems}</ul>
    }
})

export default CommentListOld