import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'
import { reducer as mine } from 'pages/mine/'
// 添加 reducer combin
const reducer = combineReducers({
  account,
  mine
})

export default reducer