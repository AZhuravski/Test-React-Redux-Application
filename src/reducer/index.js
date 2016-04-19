import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'

export default combineReducers({
    articles: articleReducer,
    counter: counterReducer
})
