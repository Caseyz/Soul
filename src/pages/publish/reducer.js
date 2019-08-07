// import store from 'store'
import { Map } from 'immutable'
import { GETFOCUS, VALUE } from './actionTypes'

const defaultState = Map({
    focus: true,
    value: ''
})

const reducer = (state = defaultState, action) => {
    // console.log(action.data)
    switch (action.type) {
        case GETFOCUS:
            return state.set('focus', action.data)
        case VALUE:
            return state.set('value', action.data)
        default:
            return state
    }
}

export { reducer } 