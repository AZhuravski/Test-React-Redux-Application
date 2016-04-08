import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle } from '../AC/articles'
import connectToStore from '../HOC/connectToStore'

class AppContainer extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return <ArticleList articles = {this.props.articles} deleteArticle = {deleteArticle}/>
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getAll()
    }
}

export default connectToStore(['articles'], getState)(AppContainer)