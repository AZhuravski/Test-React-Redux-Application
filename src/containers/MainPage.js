import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ElementList from '../components/ElementList'

class MainPage extends Component {
    static propTypes = {
        storage: PropTypes.object.isRequired,
    }

    render() {
        const { storage } = this.props
        const sections = storage.sections,
            sectionsAmount = Object.keys(storage.sections).length-1,
            elements = storage.symbols.elements
        var symbolCounter = {
            simpleSymbolCounter: 0,
            simpleRootSymbolCounter: 0,
            complexSymbolCounter: 0,
            complexRootSymbolCounter: 0,
            symbolLevel: 0
        }

        symbolCounter = this.elementsAnalyser(elements, symbolCounter)  

        console.log('counter:',symbolCounter); 
             
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>Input file: </td>
                        <td><b>{storage.file}</b></td>
                    </tr>
                    <tr>
                        <td>Sections: </td>
                        <td><b>{sectionsAmount}</b></td>
                    </tr>
                    <tr>
                        <td>Root Symbols: </td>
                        <td><b>{symbolCounter.simpleRootSymbolCounter}</b></td>
                        <td>Symbols: </td>
                        <td><b>{symbolCounter.simpleSymbolCounter}</b></td>
                    </tr>
                    <tr>
                        <td>Root Scopes: </td>
                        <td><b>{symbolCounter.complexRootSymbolCounter}</b></td>
                        <td>Scopes: </td>
                        <td><b>{symbolCounter.complexSymbolCounter}</b></td>
                    </tr>
                    <tr>
                        <td>Root total: </td>
                        <td><b>{symbolCounter.simpleRootSymbolCounter+symbolCounter.complexRootSymbolCounter}</b></td>
                        <td>total: </td>
                        <td><b>{symbolCounter.simpleSymbolCounter+symbolCounter.complexSymbolCounter}</b></td>
                    </tr>
                    </tbody>
                </table>

                <ElementList elements={elements} />
            </div>
        )
    }

    elementsAnalyser = (elements, counter) => {
        for (var element in elements) {
            if (elements[element].type==='scope') {
                counter.complexSymbolCounter++
                counter.complexRootSymbolCounter = (!counter.symbolLevel)? counter.complexRootSymbolCounter+1 : counter.complexRootSymbolCounter
                counter.symbolLevel++
                counter = this.elementsAnalyser(elements[element].elements, counter)
            }
            if (elements[element].type==='symbol') {
                counter.simpleRootSymbolCounter = (!counter.symbolLevel)? counter.simpleRootSymbolCounter+1 : counter.simpleRootSymbolCounter
                counter.simpleSymbolCounter++
            }
        }  
        counter.symbolLevel--   
        return counter   
    }

    handleClick = (id) => (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(id)
    }
}

export default connect((state) => {
    const { storage } = state
    return {storage: storage}
}, {})(MainPage)