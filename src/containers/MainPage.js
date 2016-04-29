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

        const complexElementStatistic = this.getComplexElementStatistic(symbolCounter)

        return (
            <div>
                <table className="main">
                    <tbody>
                    <tr>
                        <td colSpan="3" className="file">Input file: <span className="data">{storage.file}</span></td>
                    </tr>
                    <tr> 
                        <td>Sections: </td>
                        <td className="data" colSpan="3">{sectionsAmount}</td>
                    </tr>
                    <tr>
                        <td className="symbols">Root Symbols: </td>
                        <td className="data symbols">{symbolCounter.simpleRootSymbolCounter}</td>
                        <td className="symbols">Symbols: </td>
                        <td className="data symbols">{symbolCounter.simpleSymbolCounter}</td>
                    </tr>
                    <tr>
                        <td className="complex">Root Complex Elements: </td>
                        <td className="data complex">{symbolCounter.complexRootSymbolCounter}</td>
                        <td className="complex">Complex Elements: <br/>{complexElementStatistic}</td>
                        <td className="data complex">{symbolCounter.complexSymbolCounter}</td>
                    </tr>
                    <tr>
                        <td>Root total: </td>
                        <td className="data">{symbolCounter.simpleRootSymbolCounter+symbolCounter.complexRootSymbolCounter}</td>
                        <td>total: </td>
                        <td className="data">{symbolCounter.simpleSymbolCounter+symbolCounter.complexSymbolCounter}</td>
                    </tr>
                    </tbody>
                </table>
                <hr />

                <h2>Symbols & Complex Elements</h2>
                <ElementList elements={elements} />
            </div>
        )
    }

    elementsAnalyser = (elements, counter) => {
        for (var element in elements) {
            counter[elements[element].type] = counter[elements[element].type]? counter[elements[element].type] : 0
            counter[elements[element].type]++
            if (elements[element].type!='symbol') {
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

    getComplexElementStatistic (counter) {
        var list = []
        for (var element in counter) {
            if (element!='simpleSymbolCounter'&&
                element!='complexSymbolCounter'&&
                element!='complexRootSymbolCounter'&&
                element!='simpleRootSymbolCounter'&&
                element!='symbolLevel'&& 
                element!='symbol') 
                list = list.concat(<div className="complex-elements" key={element}>{element}: {counter[element]}</div>)
        }
        return list
    }
}

export default connect((state) => {
    const { storage } = state
    return {storage: storage}
}, {})(MainPage)