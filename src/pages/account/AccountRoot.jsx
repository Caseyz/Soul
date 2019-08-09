import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  Route,
} from 'react-router-dom'
import {
    setLoginState,
    setPhone
} from './store/'
import Login from './login/LoginContainer'
import AddInfo from './addInfo/AddInfo'
import FindPassword from './forgetpassword/FindPassword'

class AccountRoot extends Component {
  constructor(props) {
    super(props)
    this.state={
      phone: '',
      loginState: false
    }
  }
  render() {
    return (
      <div style={{height: '100vh', position: 'relative'}}>
        <Route path='/account' 
            children={(props)=>(<Login {...this.props} {...props}></Login>)} exact>
        </Route>
        {/* 注册后, 用户信息添加 */}
        <Route path='/account/addInfo' 
            children={(props)=>(<AddInfo {...this.props} {...props}></AddInfo>)}>
        </Route>
        {/* 找回密码 */}
        <Route path='/account/findpwd' 
            children={(props)=>(<FindPassword {...this.props} {...props}></FindPassword>)}>
        </Route>
      </div>
    )
  }
}

const mapState = state => ({
    isLogin: state.getIn(['account', 'isLogin']),
    phone: state.getIn(['account', 'phone'])
})
const mapDispatch = dispatch => ({
    setLoginState(isLogin) {
        console.log(1)
        dispatch(setLoginState(isLogin))
    },
    setPhone(phone) {
        dispatch(setPhone(phone))
    }
})
export default connect(mapState, mapDispatch)(AccountRoot)