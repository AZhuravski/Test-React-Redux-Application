import { createStore } from 'redux'
import { INCREMENT } from '../constants'

function reducer(state, action) {
    const { type, data } = action
    return type == INCREMENT ? state + 1 : state
}

const store = createStore(reducer, 0)

export default store