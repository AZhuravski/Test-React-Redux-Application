import React, { Component, PropTypes } from 'react'

class Symbol extends Component {
    static propTypes = {
        symbolName: PropTypes.string.isRequired,
        symbol: PropTypes.object.isRequired
    }

    render() {
        const { symbolName, symbol } = this.props
        return (
            <div>
                <span>{symbol.type}: </span>
                <span>{symbolName}</span>
                <span>symbol type: {symbol.symboltype} </span>
                <span>section: {symbol.section} </span>
                <span>address: {symbol.address} </span>
                <span>mem.type: {symbol.memType} </span>
                <span>size: {symbol.size} </span>
            </div>
        )
    }
}

export default Symbol