import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'
import { reducer as publish } from 'pages/publish/reducer'

// 添加 reducer combin
const reducer = combineReducers({
  account,
  publish
})

export default reducer