import { combineReducers } from 'redux'
import storageReducer from './storage'

export default combineReducers({
	storage: storageReducer
})
