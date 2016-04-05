import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle } from '../AC/articles'

class AppContainer extends Component {
    static propTypes = {

    };

    constructor() {
        super()
        this.state = this.getState()
    }

    getState() {
        return {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.changeArticles)
    }

    changeArticles = () => {
        this.setState(this.getState())
    }

    render() {
        return <ArticleList articles = {this.state.articles} deleteArticle = {deleteArticle}/>
    }
}

export default AppContainer