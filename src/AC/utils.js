import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from '../constants'

export function asyncAC(apiCall, type) {
    return (data, ...args) => {
        AppDispatcher.dispatch({
            type: type + START,
            data
        })

        setTimeout(() => {
            apiCall(data, ...args)
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
        }, 1000)
    }
}