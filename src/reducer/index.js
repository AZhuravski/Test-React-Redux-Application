import articleReducer from './articles'
import counterReducer from './counter'

export default (state, action) => {
    return {
        articles: articleReducer(state.articles, action),
        counter: counterReducer(state.counter, action)
    }
}