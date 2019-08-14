// import store from 'store'
import { Map } from 'immutable'
import { GETFOCUS, VALUE, IMG, LOCALID, VOICE } from './actionTypes'

const defaultState = Map({
    focus: true,
    value: '',//能显示表情的文本
    img: [], //需要上传到服务器的
    voice:'', //需要上传到服务器的
    //本地的
    localid:[]
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
        case LOCALID:
            return state.set('localid', action.data)
        default:
            return state
    }
}

export { reducer } 