import React, { Component } from 'react'

import http from 'utils/http'

import Logo from '../_components/logo'
import Button from '../_components/button/Button'
import PasswordInput from '../login/PasswordInput'
import { FlexMidCen } from '../_components/layout/'

class FindPassword extends Component {
  constructor(props){
    super(props)
    this.state={
        password: '',
        btnType: 'disabled',
        isLoading: false
    }
  }

  changePassword = (password, btnType) => {
      this.setState({
          password,
          btnType: btnType ? 'normal' : 'disabled'
      })
  }

  handleClick = async () => {
    this.setState({
        isLoading: true
    })
    let res = await http.get('/modifyinfo', {
        pwd: this.state.password
    })
    this.setState({
        isLoading: false
    })
    if( res.code === 1 ) {
        console.log(1)
        this.props.history.replace('/account')
    }else if (res.code === 0) {
        console.log(0)
        this.props.history.replace('/account', {clickType: 2})
    }else {
        console.log(res.code)
    }
  }

  render() {
    return (
      <>
        <Logo></Logo>
        <PasswordInput changePassword={this.changePassword}></PasswordInput>
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
export default FindPassword