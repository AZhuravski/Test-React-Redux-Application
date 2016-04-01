import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    state = {
        selectedArticles: []
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isSelected = {this.state.selectedArticles.includes(article.id)}
                    selectArticle = {this.selectArticle}
                />
            </li>
        )
    }

    selectArticle = (id) => {
        this.setState({
            selectedArticles: this.state.selectedArticles.concat(id)
        })
    }
}

export default AricleList