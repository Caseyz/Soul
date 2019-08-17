// 依赖
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  Route
} from 'react-router-dom'
// store 引入
import store from '@/store/'

// 组件引入
import IsRedirectAccount from 'components/account/IsRedirectAccount'
import { AccountContainer } from 'pages/account/'
import { Home } from './pages/home/index'
import Starting from 'pages/pos-pages/starting/Starting'
import { SocketConnection } from 'components/socket/'

// 浮层页面
import AddFriend from 'pages/pos-pages/add-friend/AddFriend'
import DynamicDetails from 'pages/pos-pages/dynamic-details/DynamicItem'
import SoulMoney from 'pages/pos-pages/soul-money/SoulMoney'
import SoulTest from 'pages/pos-pages/soul-test/SoulTest'
import TestSelf from 'pages/pos-pages/test-self/TestSelf'

class App extends Component {
  constructor(props) {
      super(props)
      this.state={
          isInStarting: true
      }
  }
  closeStarting= ()=>{
      this.setState({
          isInStarting: false
      })
  }
  render() {
    return (
      <Provider store={store}>
        <div style={{height: '100%', overflow:'hidden' ,position:'relative'}}>
            <Starting
            animate="model"
            hasWrap={false}
            showAnimate={this.state.isInStarting}
            closeStarting={this.closeStarting}
            ></Starting>
            <IsRedirectAccount 
            comp={AccountContainer}
            animate="model"
            hasWrap={false}
            showAnimate={!this.state.isInStarting}
            >
                <SocketConnection>
                    <Route path='/' component={Home}></Route>
                    {/* <Home></Home> */}
                    <Route path='/comment/:id' children={
                        (props)=>(
                            <DynamicDetails 
                              {...props}
                              className='flex'
                            ></DynamicDetails>
                        )
                    }></Route>
                    {/* <Route path='/message/:uid' children={}></Route> */}
                    {/* <Route path='' children={
                        ()=>(
                            
                        )
                    }></Route> */}
                    <Route path=''></Route>
                    <Route path='/addfriend' children={
                        (props)=>(
                            <AddFriend
                             {...props}
                            ></AddFriend>
                        )
                    }></Route>
                    <Route path='/soulmoney' children={
                        (props)=>(
                            <SoulMoney
                             {...props}
                            ></SoulMoney>
                        )
                    }></Route>
                    <Route path='/soultest/:id' children={
                        (props)=>(
                            <SoulTest
                             {...props}
                            ></SoulTest>
                        )
                    }></Route>
                    <Route path='/testself/:id' children={
                        (props)=>(
                            <TestSelf {...props}></TestSelf>
                        )
                    }></Route>
                </SocketConnection>
            </IsRedirectAccount>
        </div>
      </Provider>
    )
  }
}
export default App
