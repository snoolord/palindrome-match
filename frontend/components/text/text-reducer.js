import { SEND_BODY } from './text-actions'
import merge from 'lodash/merge'

const _defaultState = {
    body: []
}

const TextReducer = function (state = _defaultState, action) {
    let newState = state
    switch (action.type) {
        case SEND_BODY:
            return merge({}, _defaultState, action.body)
        default:
            return state
    }
}

export default TextReducer
