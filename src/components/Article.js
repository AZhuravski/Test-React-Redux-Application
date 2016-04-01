import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text} = this.props.article
        const body = this.state.isOpen ? <section>{text}</section> : null
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
                <CommentList comments = {article.comments}/>
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