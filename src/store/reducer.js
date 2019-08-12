import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'
<<<<<<< HEAD
import { reducer as publish } from 'pages/publish/reducer'
import { reducer as chat}  from 'pages/chat/ChatList/'
import {reducer as focus} from 'pages/chat/focusList/'
import {reducer as square} from 'pages/square/'

// 添加 reducer combin
const reducer = combineReducers({
  account,
  publish,
  chat,
  focus,
  square,
=======
import { reducer as mine } from 'pages/mine/'
// 添加 reducer combin
const reducer = combineReducers({
  account,
  mine
>>>>>>> mine-20190805-gongpengji
})

export default reducer