import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS, LOADING } from '../constants'
import { loadCommentsForPage } from '../AC/comments'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.pagination = {}

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    })
                    break

                case LOAD_COMMENTS_FOR_PAGE + START:
                    this.pagination[data.page] = LOADING
                    break

                case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
                    this.total = response.total
                    this.pagination[data.page] = response.records.map(comment => comment.id)
                    response.records.forEach(this.__add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadForPage = (page) => {
        const pagination = this.pagination[page]
        if (!pagination) loadCommentsForPage({ page })
        if (!pagination || pagination == LOADING) return LOADING
        return pagination.map(this.getById)
    }
}

export default CommentStore