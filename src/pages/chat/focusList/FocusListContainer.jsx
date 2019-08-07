
import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import FocusHeader from './focusHeader/FocusHeader'
import FocusNav from './focusNav/FocusNav'
import FocusItems from './focusItems/FocusList'
import { asyncGetAll, loadTestData, asyncGetMyFocusListData,asyncGetFocusMeList } from './actionCreator'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    myFocusList: state.getIn(['focus', 'myFocusList']),
    focusMeList: state.getIn(['focus', 'focusMeList'])
  }
}
const mapDispatch = (dispatch) => ({
  loadData: () => {
    dispatch(loadTestData())
  },
  getMyFocus: () => {
    dispatch(asyncGetMyFocusListData())
  },
  getFocusMe:()=>{
    dispatch(asyncGetFocusMeList());
  }
})
class FocusListContainer extends Component {
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
        <FocusHeader></FocusHeader>
        <FocusNav myFocusCount={this.props.myFocusList && this.props.myFocusList.length || 0} focusMeCount={this.props.focusMeList && this.props.focusMeList.length} onTabChange={this.handleTabChange.bind(this)}></FocusNav>
        <div style={{ height: "40px", border: '1px solid #aaa' }}></div>
        <FocusItems list={this.state.list}></FocusItems>
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

export default connect(mapState, mapDispatch)(FocusListContainer);