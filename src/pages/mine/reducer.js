import store from 'store'
import { Map }  from 'immutable'
import { SETPHONE } from './actionTypes'

const defaultState = Map({
  phone: store.get(SETPHONE) || ''
})

const reducer = (state=defaultState, action)=>{
  switch(action.type) {
    case SETPHONE:
      store.set(SETPHONE, action.payload)
      return state.set('phone', action.payload)
    default:
      return state
  }
}

export default reducer

