import {  } from '../constants'
import {articles as defaultArticles} from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    switch (type) {
    	case DELETE_ARTICLE:
    		articles = articles.filter(function(article){
    			return !(article.id === data);
    		},data)
    		break;
    }

    return articles
}