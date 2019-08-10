// import store from 'store'
import { Map } from 'immutable'
import { GETFOCUS, VALUE, IMG, PHOTO, VOICE } from './actionTypes'

const defaultState = Map({
    focus: true,
    value: '',
    img: [],
    voice:''
})

const reducer = (state = defaultState, action) => {
    // console.log(action.data)
    switch (action.type) {
        case GETFOCUS:
            return state.set('focus', action.data)
        case VALUE:
            return state.set('value', action.data)
        case IMG: 
            return state.set('img', action.data)
        case VOICE:
            return state.set('voice', action.data)
        default:
            return state
    }
}

export { reducer } 