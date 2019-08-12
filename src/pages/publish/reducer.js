// import store from 'store'
import { Map } from 'immutable'
import { GETFOCUS, VALUE, IMG, SERVERID, VOICE } from './actionTypes'

const defaultState = Map({
    focus: true,
    value: '',
    //需要上传到服务器的
    img: [],
    voice:'',
    //本地的
    serverid:[]
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
        case SERVERID:
            return state.set('serverid', action.data)

        default:
            return state
    }
}

export { reducer } 