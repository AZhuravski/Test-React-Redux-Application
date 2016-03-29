import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
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
            <li key={article.id}><Article article = {article} /></li>
        )
    }
}

export default AricleList