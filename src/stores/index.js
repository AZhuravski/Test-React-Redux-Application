import ArticleStore from './ArticleStore'
import SimpleStore from './SimpleStore'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {
    articles: new ArticleStore(normalizedArticles),
    comments: new SimpleStore(normalizedComments)
}

//for debug only
window.stores = stores

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles