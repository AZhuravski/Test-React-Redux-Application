import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title } = this.props.article
        return (
            <div ref = "articleContainer">
                <h3 onClick = {this.handleClick}>{title}</h3>
                {this.getBody()}
            </div>
        )
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    getBody() {
        if (!this.state.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = "commentList" />
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