import { createStore } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import { applyMiddleware } from 'redux'

const enhancer = applyMiddleware(logger)

const store = createStore(reducer, {}, enhancer)

export default store