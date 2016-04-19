import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, 0)

export default store