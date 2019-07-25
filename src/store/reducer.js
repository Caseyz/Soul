import { combineReducers } from 'redux-immutable'

// 引入reducer
import { reducer as account } from 'pages/account/'

// 添加 reducer combin
const reducer = combineReducers({
  account
})

export default reducer