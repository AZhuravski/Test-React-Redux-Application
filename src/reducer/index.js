import { combineReducers } from 'redux'
import storageReducer from './storage'
import articleReducer from './articles'
import counterReducer from './counter'

export default combineReducers({
	storage: storageReducer,
    articles: articleReducer,
    counter: counterReducer
})
