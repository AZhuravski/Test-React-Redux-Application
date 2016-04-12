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

    componentWillReceiveProps(nextProps) {
        const { article, isOpen, ignoreLoading } = nextProps
        if (ignoreLoading) return
        if (isOpen && !this.props.isOpen && !article.text) loadArticleById({id: article.id})
    }

    render() {
        const { article: { title }, isSelected, openItem, deleteArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
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