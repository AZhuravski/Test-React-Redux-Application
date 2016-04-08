import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break

                case ADD_COMMENT:
                    const article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(data.id)
                    this.emitChange()
                    break
            }
        })
    }
}

export default ArticleStore