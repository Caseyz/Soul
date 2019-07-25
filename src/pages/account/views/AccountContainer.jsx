// 依赖
import React, { Component } from 'react'
import {connect} from "react-redux"
// dispatch
import { setLoginState } from '../actionCreator'
// 工具
import http from 'utils/http'

const mapState = state => ({
  isLogin: state.getIn(['account', 'isLogin']),
  phone: state.getIn(['account', 'phone'])
})
const mapDispatch = dispatch => ({
  setLoginState(isLogin) {
    dispatch(setLoginState(isLogin))
  }
})

class AccountContainer extends Component {
  constructor(props) {
    super(props)
    this.defaultState = {
      registered: false,
      phone: this.props.isLogin
    }
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default connect(mapState, mapDispatch)(AccountContainer)