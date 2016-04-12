import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'
import { loadArticleById } from '../AC/articles'

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object
    };

    render() {
        const { article } = this.props
        if (!article || article.loading) return <h3>Loading...</h3>

        return (
            <h3>{article.title}</h3>
        )
    }
}

function getState(stores, props) {
    const { id } = props
    const article = stores.articles.getById(id)
    if (!article) loadArticleById({ id })

    return {
        article: article
    }
}

export default connectToStore(['articles'], getState)(Article)