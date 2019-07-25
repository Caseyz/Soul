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
    this.props.setPhone(this.state.phone)
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
        <Redirect from="/account" to='/account/inputphone' exact></Redirect>
        
        <Route 
          path="/account/inputphone" 
          children={()=>(
            <AccountContainerUI 
              type='inputphone'
              {...this.props}
              setPhone={this.setPhone}
              phone={this.state.phone}
              isPhoneCode={this.state.isPhoneCode}
            />
        )}></Route>

        <Route 
          path="/account/login" 
          children={()=>(
            <AccountContainerUI 
              type='login' 
              {...this.props} 
            />
        )}></Route>

        <Route 
          path='/account/code' 
          children={()=>(
            <AccountContainerUI
              type='code'
              {...this.props} 
            />
        )}></Route>
      </>
    )
  }
}
export default connect(mapState, mapDispatch)(AccountContainer)