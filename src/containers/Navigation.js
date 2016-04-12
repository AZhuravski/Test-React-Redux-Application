import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'

class Navigation extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        loading: PropTypes.bool
    };

    render() {
        const { articles, loading } = this.props
        if (loading) return <h3>Loading...</h3>
        const links = articles.map(article =>
            <li key={article.id}>
                <Link to={`/articles/${article.id}`} activeClassName="active" activeStyle = {{color: 'red'}}>{article.title}</Link>
            </li>)
        return (
            <ul>
                {links}
            </ul>
        )
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getOrLoadAll(),
        loading: stores.articles.loading
    }
}

export default connectToStore(['articles'], getState)(Navigation)