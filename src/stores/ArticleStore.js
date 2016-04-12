import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { loadAllArticles } from '../AC/articles'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data, response } = action
            let article

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break

                case ADD_COMMENT:
                    article = this.getById(data.articleId)
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

                case LOAD_ARTICLE_BY_ID + START:
                    if (!this.getById(data.id)) this.__add(data)
                    this.getById(data.id).loading = true
                    break;

                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this.__add(response)
                    break;

                default: return
            }
            this.emitChange()
        })
    }

    getOrLoadAll() {
        const articles = this.getAll()
        if (!articles.length && !this.loading) loadAllArticles()
        return articles
    }
}

export default ArticleStore