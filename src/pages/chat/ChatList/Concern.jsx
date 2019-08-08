import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import ChatHeader from './chatHeader/ChatHeader'
import ChatNav from './chatNav/ChatNav'
import ChatItems from './chatItems/ChatList'
import { asyncGetAll, loadTestData, asyncGetMyFocusListData,asyncGetFocusMeList } from './actionCreator'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    myFocusList: state.getIn(['chat', 'myFocusList']),
    focusMeList: state.getIn(['chat', 'focusMeList'])
  }
}
const mapDispatch = (dispatch) => ({
  loadData: () => {
    dispatch(asyncGetAll())
  },
  getMyFocus: () => {
    dispatch(asyncGetMyFocusListData())
  },
  getFocusMe:()=>{
    dispatch(asyncGetFocusMeList());
  }
})
class Concern extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: this.props.myFocusList,
      type: 0
    }
  }
  handleTabChange(type) {
    this.setState({
      type: type,
    })
    switch (type) {
      case 0: {
        this.props.getMyFocus();
        break;
      }
      case 1: {
        this.props.getFocusMe();
        break;
      }
      case 2: {
        break;
      }
      default:
        break;
    }
  }
  render() {
    return (
      <>
        <ChatHeader {...this.props}></ChatHeader>
        <div style={{ height: "40px", border: '1px solid #aaa' }}></div>
        <ChatNav myFocusCount={this.props.myFocusList && this.props.myFocusList.length || 0} focusMeCount={this.props.focusMeList && this.props.focusMeList.length} onTabChange={this.handleTabChange.bind(this)}></ChatNav>
        
        <ChatItems list={this.state.list}></ChatItems>
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

export default connect(mapState, mapDispatch)(Concern);