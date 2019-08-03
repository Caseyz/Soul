import store from 'store'
import { Map }  from 'immutable'
import { ISLOGIN, SETPHONE } from './actionTypes'

const defaultState = Map({
  isLogin: store.get(ISLOGIN)|| false,
  phone: store.get(SETPHONE) || ''
})

const reducer = (state=defaultState, action)=>{
  switch(action.type) {
    case ISLOGIN:
      store.set(ISLOGIN, action.payload)
      return state.set('isLogin', action.payload)
    case SETPHONE:
      store.set(SETPHONE, action.payload)
      return state.set('phone', action.payload)
    default:
      return state
  }
}

export default reducer

