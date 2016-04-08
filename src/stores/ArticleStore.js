import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break

                case ADD_COMMENT:
                    const article = this.getById(data.articleId)
                    article.comments = (article.comments || []).concat(data.id)
                    break

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break

                case LOAD_ALL_ARTICLES + SUCCESS:
                    response.forEach(this.__add)
                    this.loading = false
                    break;

                case LOAD_ALL_ARTICLES + FAIL:
                    this.error = error
                    break;

                default: return
            }
            this.emitChange()
        })
    }
}

export default ArticleStore