import React, { Component, PropTypes } from 'react'
import CommentList from './CommentListOld'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title } = this.props.article
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} />
            </section>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article