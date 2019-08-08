import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import { Container } from './_components/layout/'
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
      <Container>
        {/* <Redirect from='/account' to='/account/addInfo' exact></Redirect> */}
        <Route path='/account' component={Login} exact></Route>
        <Route path='/account/addInfo' component={AddInfo}></Route>
        <Route path='/account/findpwd' component={FindPassword}></Route>
      </Container>
    )
  }
}
export default AccountRoot