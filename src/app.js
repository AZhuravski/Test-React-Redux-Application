import React from 'react'
import { render } from 'react-dom'
import AppContainer from './containers/AppContainer'
import { articles } from './fixtures'

render(<AppContainer />, document.getElementById('container'))