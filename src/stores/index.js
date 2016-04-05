import ArticleStore from './ArticleStore'
import SimpleStore from './SimpleStore'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores, normalizedArticles),
    comments: new SimpleStore(stores, normalizedComments)
})

//for debug only
window.stores = stores

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles