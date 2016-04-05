import React, { Component, PropTypes } from 'react'
import Article from './Article'
import singleOpen from '../HOC/singleOpen'

class AricleList extends Component {
    state = {
        selectedArticles: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired,
        deleteArticle: PropTypes.func.isRequired
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
        const { isOpen, openItem } = this.props
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                    openItem = {openItem(article.id)}
                    isOpen = {isOpen(article.id)}
                    deleteArticle = {this.props.deleteArticle}
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

export default singleOpen(AricleList)