import React from 'react'
import { render } from 'react-dom'
//import AppContainer from './containers/AppContainer'
//import { articles } from './fixtures'
/*
import routes from './routes'

render(routes, document.getElementById('container'))*/
import Counter from './containers/Counter'
import store from './store'

window.store = store

function renderCounter() {
    render(<Counter count = {store.getState()} />, document.getElementById('container'))
}

renderCounter()

store.subscribe(renderCounter)