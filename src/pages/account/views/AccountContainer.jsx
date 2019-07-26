// 依赖
import React, { Component } from 'react'
import { connect } from "react-redux"
import { Route, Redirect } from 'react-router-dom'
// dispatch
import { setLoginState, setPhone } from '../actionCreator'
// 工具
import http from 'utils/http'

// 组件
import AccountContainerUI from './AccountContainerUI'

const mapState = state => ({
  isLogin: state.getIn(['account', 'isLogin']),
  phone: state.getIn(['account', 'phone'])
})
const mapDispatch = dispatch => ({
  setLoginState(isLogin) {
    dispatch(setLoginState(isLogin))
  },
  setPhone(phone) {
    dispatch(setPhone(phone))
  }
})
class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registered: false,
      phone: this.props.phone,
      isPhoneCode: false,
    }
  }
  static getDerivedStateFromProps(props, state){
    return null
  }
  // 获取 phone 并设置
  setPhone = (phone)=>{
    let reg = /\d{0,11}/i
    if( reg.test(phone) ) {
      this.setState({
        phone
      })
    }
  }
  // 检查 phone 注册状态
  checkPhone = ()=>{
    console.log(this.state.phone)
    // this.props.setPhone(this.state.phone)
  }
  // 检查 输入是否满足下一步条件
  rulePhone = ()=>{
    let reg = new RegExp("^1(3|4|5|7|8)\d{9}$");
    this.setState({
      isPhoneCode: reg.test(this.state.phone)
    })
  }

  render() {
    return (
      <>
        {/* 重定向到 用户名输入界面 */}
        <Redirect from="/account" to='/account/inputphone' exact></Redirect>
        {/* 进入 phone 输入页面 */}
        <Route 
          path="/account/inputphone" 
          children={()=>(
            <AccountContainerUI 
              type='inputphone'
              {...this.props}
              setPhone={this.setPhone}
              rulePhone={this.rulePhone}
              phone={this.state.phone}
              isPhoneCode={this.state.isPhoneCode}
            />
        )}></Route>
        {/* 进入密码输入界面 */}
        <Route 
          path="/account/login" 
          children={()=>(
            <AccountContainerUI 
              type='login' 
              {...this.props}
              phone={this.state.phone}
            />
        )}></Route>
        {/* 进入用户输入验证码界面 */}
        <Route 
          path='/account/code' 
          children={()=>(
            <AccountContainerUI
              type='code'
              {...this.props}
              phone={this.state.phone}
            />
        )}></Route>
      </>
    )
  }
}
export default connect(mapState, mapDispatch)(AccountContainer)