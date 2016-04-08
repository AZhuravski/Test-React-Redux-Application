import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT } from '../constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    })
                    break
            }
        })
    }
}

export default CommentStore