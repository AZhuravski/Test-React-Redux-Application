import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import store from './store'
require('./sass/main.scss')

render(<Root store = {store} />, document.getElementById('container'))
