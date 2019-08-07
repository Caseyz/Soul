// 依赖
import React, { Component } from 'react'
import {connect} from 'react-redux'
// 引入actionCreate
import './style.css'

// 引入http请求模块
import http from 'utils/http'

// 样式组件
import Logo from '../_components/logo/'
import { FlexMidCen } from '../_components/layout/'
import Button from '../_components/button/Button'

// 路由组件
import PhoneInput from './PhoneInput'
import PasswordInput from './PasswordInput'
import CodeInput from './CodeInput'

// actionCreator
import { setPhone } from '../store/index'

// 第三方组件
import { Toast } from 'antd-mobile'

class LoginContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
        clickType: 1, /* 1.phone检查 2.密码登录  3.注册或验证码登录  4.找回密码 */
        phone: this.props.phone || '',
        password: '',
        code: '',
        isLoading: false,
        btnType: 'disabled'
    }
  }

  // 设置按钮状态的处理 && 接收 phone 数据
  handlePhoneState =(value, phone)=> {
      // 设置按钮状态
      value 
      ? this.setState({
            btnType: 'normal',
            phone
        })
      : this.setState({
            btnType: 'disabled',
            phone,
            clickType: 1
        })
  }
  // 获取密码
  changePassword = password=> {
    this.setState({
        password,
    })
  }
  // 请求发送验证码
  getCode = async ()=> {
    console.log('请求发送验证码')
    let res = await http.get('/code', {
      phone: this.state.phone
    })
    console.log(res)
  }
  // 获取验证码
  changeCode = code=> {
    this.setState({
        code,
    })
  }
  // 按钮对应的处理函数
  handleClick = ()=> {
      let {clickType} = this.state
      if(clickType===1) {
        this.verifyPhone()
        this.props.setPhone(this.state.phone)
      }else if(clickType===2) {
        this.loginByPwd()
      }else if(clickType===3) {
        this.fetchByCode()
      }else if(clickType===4) {

      }else {
          
      }
  }

  
  // 验证手机号状态
  async verifyPhone() {
    this.setState({
        isLoading: true
    })

    let res = await http.get('/checkuser', {
        phone: this.state.phone
    })

    if( res.code===1 ) {
        // 未注册状态逻辑
        console.log("未注册")
        this.setState({
            clickType: 3,
            isLoading: false
        })
    }else if( res.code===0 ) {
        // 已注册状态逻辑
        console.log("已经注册")
        this.setState({
            clickType: 2,
            isLoading: false
        })
    }
    this.props.setPhone(this.state.phone)
  }
  // 密码登录
  async loginByPwd() {
    let {phone, password:pwd} = this.state
    this.setState({
        isLoading: true
    })
    let res = await http.post('/logicbypwd', { 
      phone,
      pwd
    })
    if(res.code===0) {
      // 登录成功操作
      console.log('登录成功')
      this.setState({
          isLoading: false
      })

    }else if( res.code===1 ) {
      // 登录失败操作
      console.log('登录失败')
      console.log(res)
      Toast.fail(res.msg, 1, ()=>{
        this.setState({
          isLoading: false
        })
      })
    }
  }
  // 验证码登录 || 验证码注册
  async fetchByCode() {
    this.setState({
        isLoading: true
    })
    let res = await http.post('/logicbycode', {
        phone: this.state.phone,
        code: this.state.code
    })
    console.log(res)
    if( res.code==='1' ) {
        Toast.fail(res.msg, 1, ()=>{
            this.setState({
                isLoading: false
            })
        })
    }
    if( res.statu === '0' ) {
      // 验证码登录成功逻辑
      console.log('登录成功')
    }else if( res.statu === '1' ){
      // 用户注册成功逻辑
      console.log('注册成功')
      this.setState({
        isLoading: false
      })
      this.props.history.push('/account/addInfo')
    }
  }

  componentDidMount() {
      if (this.state.phone.length === 11) {
        this.setState({
            btnType: 'normal'
        })
      }
  }

  render() {
    let res = this.props.location.pathname
    return (
      <>
        <Logo />
        <PhoneInput handlePhoneState={this.handlePhoneState} phone={this.state.phone}></PhoneInput>
        {
            this.state.clickType===2
            ? (
                <>
                    <PasswordInput changePassword={this.changePassword}></PasswordInput>
                    <div className="forget-wrap">
                    <div 
                        className="text"
                        onClick={this.forgetPwd}
                    >忘记密码</div>
                    </div>
                </>
            )
            : this.state.clickType===3 
            ? (
                <>
                    <CodeInput getValue={this.changeCode}></CodeInput>
                    <div className="code-wrap">
                    <div 
                        className="text"
                        onClick={this.getCode}
                    >发送验证码</div>
                    </div>
                </>
            )
            : ''
        }
        
        <FlexMidCen style={{marginTop: '0.4rem'}}>
            <Button
             type={this.state.btnType}
             isLoading={this.state.isLoading}
             handleClick={this.handleClick}
            >确定</Button>
        </FlexMidCen>
      </>
    )
  }
}

const mapState = (state)=> ({
    phone: state.getIn(['account', 'phone'])
})
const mapDispatch = (dispatch)=> ({
    setPhone(phone) {
        dispatch(setPhone(phone))
    }
})

export default connect(mapState, mapDispatch)(LoginContainer)