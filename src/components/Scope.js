import React, { Component, PropTypes } from 'react'
import ElementList from '../components/ElementList'
import toggleOpen from '../HOC/toggleOpen'

class Scope extends Component {
    static propTypes = {
        scopeName: PropTypes.string.isRequired,
        scope: PropTypes.object.isRequired
    }

    render() {
        const { scopeName, scope, isOpen } = this.props
        return (
            <div>
                <span>{scope.type}: </span>
                <span><a href="#" onClick = {this.props.toggleOpen}>{scopeName} </a></span>
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

export default toggleOpen(Scope)