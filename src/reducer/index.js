import { INCREMENT } from '../constants'

export default (state, action) => {
    const { type, data } = action
    return type == INCREMENT ? state + 1 : state
}
