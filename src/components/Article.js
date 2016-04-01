import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {

    render() {
        const { article: { title }, isSelected } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {this.handleClick} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a>
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

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = "commentList" />
            </section>
        )
    }

    handleClick = (ev) => {
        this.props.toggleOpen()
    }
}

export default toggleOpen(Article)