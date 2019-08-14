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
import Publish from 'pages/publish/'

import ChatRoot from 'pages/chat/ChatRoot'
import FocusListContainer from 'pages/chat/focusList/FocusListContainer'
//广场组件
import Square from 'pages/square/Test.jsx'
//自己组件
import { Mine } from 'pages/mine/'
import {SocketConnection} from 'components/socket/'

// 测试
// import Test from './test/Test'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IsRedirectAccount comp={AccountContainer}>
          <SocketConnection>
            <Redirect from='/' to="/chat" exact></Redirect>
            <Route path='/start' render={() => (<div>start</div>)}></Route>
            <Route path='/chat' component={ChatRoot}></Route>
            <Route path='/focus' component={FocusListContainer}></Route>
            <Route path='/dynamic' component={Square}></Route>
            <Route path='/publish' component={Publish}></Route>
            <Route path='/mine' render={Mine}></Route>
            {/* <Route path='/account' component={ AccountContainer }></Route> */}

          </SocketConnection>
        </IsRedirectAccount>
      </Provider>
    )
  }
}
export default App