// 依赖
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

// store 引入
import store from '@/store/'

// 组件引入
import IsRedirectAccount from 'components/account/IsRedirectAccount'
import { AccountContainer } from 'pages/account/'
import  Dynamic  from 'pages/dynamic/'

// 测试
// import Test from './test/Test'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IsRedirectAccount comp={ Dynamic }>
          <Redirect from="/" to="/start" exact></Redirect>
          <Route path='/start' render={()=>(<div>start</div>)}></Route>
          <Route path='/dynamic' component={ Dynamic }></Route>
          <Route path='/publish' render={()=>(<div>publish</div>)}></Route>
          <Route path='/chat' render={()=>(<div>chat</div>)}></Route>
          <Route path='/mine' render={()=>(<div>mine</div>)}></Route>
          <Route path='/account' component={ AccountContainer }></Route>
        </IsRedirectAccount>
      </Provider>
    )
  }
}
export default App