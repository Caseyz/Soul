import React, { Component } from 'react'
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import AccountContainer from './AccountContainer'
import AddInfoContainer from './addInfo/AddInfoContainer'

class AccountRoot extends Component {
  constructor(props) {
    super(props)
    this.state={
      isToRegister: false
    }
  }
  render() {
    return (
      <>
        <Redirect from='/account' to='/account/entry' exact></Redirect>
        <Route path='/account/entry' component={AccountContainer}></Route>
        {
          this.state.isToRegister 
          ? (<Route path='/account/addInfo' component={AddInfoContainer}></Route>)
          : ''
        }
      </>
    )
  }
}
export default AccountRoot