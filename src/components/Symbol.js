import React, { Component, PropTypes } from 'react'

class Symbol extends Component {
    static propTypes = {
        symbolName: PropTypes.string.isRequired,
        symbol: PropTypes.object.isRequired
    }

    render() {
        const { symbolName, symbol } = this.props
        return (
            <div className="symbol">
                <div className="data name">{symbolName}</div>
                <span className="service">symbol type: </span>
                <span className="data symbol-type">{symbol.symboltype}</span>
                <span className="service">section: </span>
                <span className="data section">{symbol.section}</span>
                <span className="service">address: </span>
                <span className="data address">{symbol.address}</span>
                <span className="service">mem.type: </span>
                <span className="data memtype">{symbol.memType}</span>
                <span className="service">size: </span>
                <span className="data size">{symbol.size}</span>
            </div>
        )
    }
}

export default Symbol