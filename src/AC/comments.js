import { ADD_COMMENT } from '../constants'
import AppDispatcher from '../dispatcher'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now()
        }
    })
}