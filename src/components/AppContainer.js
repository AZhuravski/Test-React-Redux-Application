import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './ArticleList'

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

    changeArticles = () => {
        this.setState(this.getState())
    }

    render() {
        return <ArticleList articles = {this.state.articles}/>
    }
}

export default AppContainer