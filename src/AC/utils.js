import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncAC(apiCall, type, callback) {
    return (data, ...args) => {
        AppDispatcher.dispatch({
            type: type + START,
            data
        })

        setTimeout(() => {
            const dfd = apiCall(data, ...args)
                .done(response => AppDispatcher.dispatch({
                    type: type + SUCCESS,
                    data,
                    response
                }))
                .fail(error => AppDispatcher.dispatch({
                    type: type + FAIL,
                    data,
                    error
                }))
            if (callback) callback(dfd)
        }, 1000)
    }
}