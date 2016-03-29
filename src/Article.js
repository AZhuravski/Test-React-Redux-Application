import React, { Component, PropTypes } from 'react'

class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { title, text} = this.props.article
        const body = this.state.isOpen ? <section>{text}</section> : null
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article