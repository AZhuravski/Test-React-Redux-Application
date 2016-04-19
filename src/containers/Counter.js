import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired
    };

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href = "#" onClick = {this.handleClick}>increment</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default Counter