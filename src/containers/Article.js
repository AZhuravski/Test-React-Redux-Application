import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'
import { loadArticleById, deleteArticle } from '../AC/articles'
import Article from '../components/Article'

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object
    };

    render() {
        const { article } = this.props
        if (!article || article.loading) return <h3>Loading...</h3>

        return <Article
            article = {article}
            ignoreLoading = {true}
            deleteArticle = {deleteArticle}
            isOpen = {true}
        />
    }
}

function getState(stores, props) {
    const { id } = props
    const article = stores.articles.getById(id)
    if (!article || !article.text) loadArticleById({ id })

    return {
        article: article
    }
}

export default connectToStore(['articles'], getState)(ArticleContainer)