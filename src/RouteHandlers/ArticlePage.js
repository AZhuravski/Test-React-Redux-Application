import React, { Component, PropTypes } from 'react'
import ArticleContainer from '../containers/Article'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        const { id } = this.props.params
        return (
            <div>
                <h3>Article page {id}</h3>
                <ArticleContainer id = {id} />
            </div>
        )
    }
}

export default ArticlePage