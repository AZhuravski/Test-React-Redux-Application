import React from 'react'
import { render } from 'react-dom'
import Counter from './containers/Counter'
import store from './store'
import { increment } from './AC/counter'

window.store = store

function wrappedIncrement() {
    store.dispatch(increment())
}

function renderCounter() {
    render(<Counter count = {store.getState().counter} increment = {wrappedIncrement} />, document.getElementById('container'))
}

renderCounter()

store.subscribe(renderCounter)