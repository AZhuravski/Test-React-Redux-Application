import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE } from '../constants'
import AppDispatcher from '../dispatcher'
import { asyncAC } from './utils'
import { loadForPage } from './api/comments'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now()
        }
    })
}

export const loadCommentsForPage = asyncAC(loadForPage, LOAD_COMMENTS_FOR_PAGE)