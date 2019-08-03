// 依赖
import React, { Component } from 'react'
import { connect } from "react-redux"
// dispatch
import { setLoginState, setPhone } from '../actionCreator'
// 工具
import http from 'utils/http'

// 组件
import AccountContainerUI from './AccountContainerUI'
import {Toast} from 'antd-mobile'


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
      phone: this.props.phone,/** 电话号码 */
      password: '',           /** 密码 */
      code:'',                /** 验证码为多少 */

      rulePhone: false,       /** 是否为手机号 */
      isCheck: false,         /** 是否已经验证手机号码 */
      
      registered: false,      /** 是否注册过 */

      rulePassword: false,    /** 是否符合密码规范 */

      isForgetPwd: false,     /** 是否忘记密码 */
      loginByCode: false,     /** 是否通过验证码登录 */

      btnText: '确定',         /** 按钮的文字显示 */
      
      isFetchCode: false,     /** 是否已经获取验证码 */
      btnState: 0,  /* 0,1,2 0:disabled 1: pendding 2:normal */
    }
  }
  static getDerivedStateFromProps(props, state){
    let phone = state.phone || props.phone
    if ( phone.length === 11 ) {
      return {
        rulePhone:true
      }
    }
    return null
  }
  componentDidMount() {
    if(this.state.phone.length===11){
      this.setState({
        btnState: 2
      })
    }
  }
  // 获取 phone 并设置
  setPhone = (e)=>{
    let reg= /^[0-9]{0,11}$/
    let phone = e.target.value
    if( reg.test(phone) ) {
      this.setState({
        phone,
        isCheck: false,
        btnText: '确定',
        isForgetPwd: false,
        btnState: phone.length===11 ? 2 : 0,
        rulePhone: phone.length === 11
      })
    }
  }
  // 检查 phone 注册状态
  checkPhone = async ()=>{
    if( !this.state.rulePhone ) {
      return false
    }
    this.setState({
      btnState: 1
    })
    let res = await http.get('/checkuser', {
      phone: this.state.phone
    })
    if( res.code===1 ) {
      console.log("未注册")
      // 未注册状态逻辑
      this.setState({
        registered: false,
        isCheck: true,
        btnText: '注册',
        btnState: 0
      })
    }else if( res.code===0 ) {
      console.log("已经注册")
      // 已注册状态逻辑
      this.setState({
        registered: true,
        isCheck: true,
        btnText: '登录',
        btnState: 0
      })
    }
    this.props.setPhone(this.state.phone)
  }
  // 密码检测
  setPassword = (e)=> {
    let password = e.target.value
    if( password.length>5 && password.length<21 ){
      this.setState({
        password,
        rulePassword: true,
        btnState: 2
      })
    }else if( password.length<=5 ){
      this.setState({
        password,
        rulePassword: false,
        btnState: 0
      })
    }
  }
  // 登录 请求
  toLogin = async () => {
    let {phone, password:pwd} = this.state
    this.setState({
      btnState: 1
    })
    let res = await http.post('/logicbypwd', { 
      phone,
      pwd
    })
    if(res.code===0) {
      this.props.setLoginState(true)
      this.props.history.replace('/dynamic')
    }else if( res.code===1 ) {
      console.log(res)
      Toast.fail(res.msg, 1, ()=>{
        this.setState({
          btnState: 2
        })
      })
    }
  }
  // 获取验证码
  getCode = async ()=> {
    let res = await http.get('/code', {
      phone: this.state.phone
    })
    console.log(res)
  }
  // 获取用户输入的验证码
  setCode = (codeValue)=> {
    this.setState({
      code: codeValue,
      btnState: codeValue.length===4 ? 2 : 0
    })
  }
  // 验证码 登录注册
  toCode = async (e)=> {
    // let code = e.target.value
    let res = null
    if( this.state.isForgetPwd ) {
      res = http.get('/findpwd', {
        code: this.state.code
      })
    }else {
      res = await http.post('/logicbycode', {
        phone: this.state.phone,
        code: this.state.code
      })
    }
    if( res.status === 0 ) {
      // 更改密码逻辑
    }else if( res.status === 1 ){
      // 补充用户信息逻辑

    }
  }
  // 忘记密码按钮事件
  forgetPwd = () =>{
    this.setState({
      isForgetPwd: true
    })
  }
  render() {
    return (
      <>
        <AccountContainerUI 
          {...this.props}
          {...this.state}
          setPhone={this.setPhone}
          checkPhone={this.checkPhone}
          setPassword={this.setPassword}
          toLogin={this.toLogin}
          toCode={this.toCode}
          getCode={this.getCode}
          setCode={this.setCode}
          forgetPwd={this.forgetPwd}
        />
      </>
    )
  }
}
export default connect(mapState, mapDispatch)(AccountContainer)