import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import { loadArticleById } from '../AC/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        selectArticle: PropTypes.func,
        isSelected: PropTypes.bool,
        isOpen: PropTypes.bool.isRequired,
        openItem: PropTypes.func,
        deleteArticle: PropTypes.func.isRequired,
        ignoreLoading: PropTypes.bool
    }

    static contextTypes = {
        router: PropTypes.object,
        style: PropTypes.object
    }

    componentWillReceiveProps(nextProps) {
        const { article, isOpen, ignoreLoading } = nextProps
        if (ignoreLoading) return
        if (isOpen && !this.props.isOpen && !article.text) loadArticleById({id: article.id})
    }

    render() {
        const { article: { title }, isSelected, openItem, deleteArticle } = this.props
        const { style } = this.context
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleRedirectToComments}>redirect to all comments</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    handleRedirectToComments = (ev) => {
        ev.preventDefault()
        this.context.router.push('/comments')
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        if (selectArticle) selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        if (article.loading) return <h3>Loading...</h3>
        return (
            <section>
                {article.text}
                <CommentList article = {article} ref = "commentList" />
            </section>
        )
    }
}

export default Article