import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle, loadAllArticles } from '../AC/articles'
import connectToStore from '../HOC/connectToStore'

class AppContainer extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

/*
    componentDidMount() {
        loadAllArticles()
    }

*/
    render() {
        const { articles, loading } = this.props
        if (loading) return <h1>Loading...</h1>
        return <ArticleList articles = {articles} deleteArticle = {deleteArticle}/>
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getOrLoadAll(),
        loading: stores.articles.loading
    }
}

export default connectToStore(['articles'], getState)(AppContainer)