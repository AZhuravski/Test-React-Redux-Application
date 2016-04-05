import React from 'react'
import { render } from 'react-dom'
import AppContainer from './components/AppContainer'
import { articles } from './fixtures'

render(<AppContainer />, document.getElementById('container'))