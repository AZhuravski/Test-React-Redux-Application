import React, { Component, PropTypes } from 'react'
import Symbol from '../components/Symbol'
import ComplexElement from '../components/ComplexElement'

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
                    <li key={element} className="symbol">
                        <Symbol
                            symbolName = {element}
                            symbol = {elements[element]} />
                    </li>
                )
                return (
                    <li key={element} className="complex-element">
                        <ComplexElement
                            scopeName = {element}
                            scope = {elements[element]} />
                    </li>                    
                )                    
            }
        )
    }
}

export default ElementList