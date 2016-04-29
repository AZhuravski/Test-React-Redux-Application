import React, { Component, PropTypes } from 'react'
import ElementList from '../components/ElementList'
import toggleOpen from '../HOC/toggleOpen'

class ComplexElement extends Component {
    static propTypes = {
        scopeName: PropTypes.string.isRequired,
        scope: PropTypes.object.isRequired
    }

    render() {
        const { scopeName, scope, isOpen } = this.props
        return (
            <div className="scope">
                <span className="name"><a href="#" onClick = {this.props.toggleOpen}>{scopeName}</a></span>
                <div className="service">{scope.type}</div>
                {this.getElements()}
            </div>
        )
    }

    getElements() {
        const { isOpen, scope } = this.props
        if (!isOpen) return null
        return <ElementList elements={scope.elements} />
    }
}

export default toggleOpen(ComplexElement)