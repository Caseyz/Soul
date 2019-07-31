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
      rulePhone: false,
      password: '',
      rulePassword: false,
      code:''
    }
  }
  static getDerivedStateFromProps(props, state){
    return null
  }
  // 获取 phone 并设置
  setPhone = (e)=>{
    let reg= /^[0-9]{0,11}$/
    let phone = e.target.value
    if( reg.test(phone) ) {
      this.setState({
        phone,
        rulePhone: phone.length===11
      })
    }
  }
  // 检查 phone 注册状态
  checkPhone = async ()=>{
    let res = await http.get('/checkuser', {
      phone: this.state.phone
    })
    console.log(this.props)
    if( res.code===1 ) {
      console.log("未注册")
      // 未注册状态逻辑
      this.props.history.push('/account/code',"register")
    }else if( res.code===0 ) {
      console.log("已经注册")
      // 已注册状态逻辑
      this.props.history.push('/account/login')
    }
    console.log(res)
    this.props.setPhone(this.state.phone)
  }
  // 密码检测
  setPassword = (e)=> {
    let password = e.target.value
    if( password.length>5 && password.length<21 ){
      this.setState({
        password,
        rulePassword: true,
      })
    }else if( password.length<=5 ){
      this.setState({
        password,
        rulePassword: false
      })
    }
  }
  // 登录 请求
  toLogin = async () => {
    let {phone, password:pwd} = this.state
    let res = await http.post('/logicbypwd', { 
      phone,
      pwd
    })
    console.log(res)
    if(res.code===0) {
      this.props.history.replace('/dynamic')
      console.log(res)
    }
  }
  // 获取验证码
  getCode = async ()=> {
    await http.get('/code', {
      phone: this.state.phone
    })
  }
  // 验证码 登录、注册  请求
  toCode = async (e)=> {
    console.log(this.props)
    // let code = e.target.value
    
  }
  componentDidMount() {
    if ( this.state.phone.lenght === 11 ) {
      this.setState({
        rulePhone: true
      })
    }
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
              checkPhone={this.checkPhone}
              phone={this.state.phone}
              rulePhone={this.state.rulePhone}
            />
        )}></Route>
        {/* 进入密码输入界面 */}
        <Route 
          path="/account/login" 
          children={()=>(
            <AccountContainerUI 
              type='login' 
              {...this.props}
              toLogin={this.toLogin}
              setPassword={this.setPassword}
              password={this.state.password}
              rulePassword={this.state.rulePassword}
            />
        )}></Route>
        {/* 进入用户输入验证码界面 */}
        <Route 
          path='/account/code' 
          children={()=>(
            <AccountContainerUI
              type='code'
              {...this.props}
              toCode={this.toCode}
              getCode={this.getCode}
            />
        )}></Route>
      </>
    )
  }
}
export default connect(mapState, mapDispatch)(AccountContainer)