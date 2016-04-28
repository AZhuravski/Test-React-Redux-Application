import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle } from '../AC/articles'

class MainPage extends Component {
    static propTypes = {
        storage: PropTypes.object.isRequired,
    };

    render() {
        const { storage } = this.props

        const storageFirstLevelKeys = Object.keys(storage);
        console.log('---',storageFirstLevelKeys);
        // const links = articles.map(article => <li key={article.id}>{article.title}&nbsp;-&nbsp;<a href='#' onClick = {this.handleClick(article.id)}>delete</a></li>)
        return (
            <div>
                <div>Input data: {storage.file}</div>
                <ul>
                </ul>
            </div>
        )
    }

    handleClick = (id) => (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(id)
    }
}

export default connect((state) => {
    const { storage } = state
    return {storage: storage}
}, {
    deleteArticle: deleteArticle
})(MainPage)