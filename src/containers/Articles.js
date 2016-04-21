import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/articles'

class Articles extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    };

    render() {
        const { articles } = this.props
        const links = articles.map(article => <li key={article.id}>{article.title}&nbsp;-&nbsp;<a href='#' onClick = {this.handleClick(article.id)}>delete</a></li>)
        return (
            <ul>
                <h1>Articles</h1>
                {links}
            </ul>
        )
    }

    handleClick = (id) => (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(id)
    }
}

export default connect((state) => {
    const { articles } = state
    return {articles: articles}
}, {
    deleteArticle: deleteArticle
})(Articles)