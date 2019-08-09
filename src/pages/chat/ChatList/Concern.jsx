import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import BorderedHeader from './chatHeader/ChatHeader'
import ChatNav from './chatNav/ChatNav'
import ChatItems from './chatItems/ChatList'
import ChatSearch from './chatSearch/chatSearch'
import { asyncGetChatListData } from './actionCreator'
import { connect } from 'react-redux'
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom'

const mapState = (state) => {
  return {
    chatList: state.getIn(['chat', 'chatList']),
  }
}
const mapDispatch = (dispatch) => ({
  loadData: () => {
    dispatch(asyncGetChatListData())
  },
})
class Concern extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      type: 0
    }
  }
  handleTabChange(type) {
    this.setState({
      type: type,
    })
  }
  render() {
    return (
        <>
          <BorderedHeader {...this.props}></BorderedHeader>
          <ChatSearch></ChatSearch>
          <ChatNav ></ChatNav>
          <ChatItems list={this.props.chatList} {...this.props}></ChatItems>
        </>
    )
  }
  async componentDidMount() {
    this.props.loadData();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps) {
      return {
        list: prevState.type === 0 ? nextProps.myFocusList : prevState.type === 1 ? nextProps.focusMeList : []
      }
    }

    return null
  }

}

export default connect(mapState, mapDispatch) (withRouter(Concern));