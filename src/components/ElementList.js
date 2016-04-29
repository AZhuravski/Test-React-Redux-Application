import React, { Component, PropTypes } from 'react'
import Symbol from '../components/Symbol'
import Scope from '../components/Scope'

class ElementList extends Component {
    static propTypes = {
        elements: PropTypes.object.isRequired
    }

    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }

    getList() {
        const { elements } = this.props,
            elementsArr = Object.keys(elements)
        return elementsArr.map((element, index) => {
                if (elements[element].type==='symbol') return (
                    <li key={element}>
                        <Symbol
                            symbolName = {element}
                            symbol = {elements[element]} />
                    </li>
                )
                if (elements[element].type==='scope') return (
                    <li key={element}>
                        <Scope
                            scopeName = {element}
                            scope = {elements[element]} />
                    </li>                    
                )                    
            }
        )
    }
}

export default ElementList