import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'
import { reducer as chat}  from 'pages/chat/ChatList/'
import {reducer as focus} from 'pages/chat/focusList/'

// 添加 reducer combin
const reducer = combineReducers({
  account,
  chat,
  focus
})

export default reducer