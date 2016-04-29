import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store'
require('./sass/main.scss')

// for debugging purposes only
window.store = store

render(<Root store = {store} />, document.getElementById('container'))
