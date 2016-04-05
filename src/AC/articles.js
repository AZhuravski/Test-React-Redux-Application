import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: 'delete_article',
        data: { id }
    })
}