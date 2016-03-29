import React, { Component, PropTypes } from 'react'

class Article extends Component {
    render() {
        const { title, text} = this.props.article
        return (
            <div>
                <h3>{title}</h3>
                <section>{text}</section>
            </div>
        )
    }
}

export default Article