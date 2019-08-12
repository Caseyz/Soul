import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List } from 'immutable'
import BScroll from 'better-scroll';
// import store from 'store'

import { FStyle } from './FriendStyle'
import { TopMsg } from './topMsg/'
import { Bottom as BottomMsg } from './bottomMsg'
import { loadFriendDataAsync } from 'pages/mine/actionCreator'

const mapState = state => ({
    friendData: state.getIn(['mine', 'friendData'])
})

const mapDispatch = (dispatch) => ({
    loadData(id) {
        dispatch(loadFriendDataAsync(id))
    }
})

class Friend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaleHegiht: 0,
            friendData: List([])
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if(nextProps.friendData){
    //         let sign = nextProps.friendData.toJS().sign
    //         // store.set('mine/sign', sign)
    //     }
    //     return null;
    // }
    render() {
        // console.log(this.props.friendData.toJS())
        return (
            <FStyle className="bScroll">
                <div>
                    <TopMsg friendData={this.props.friendData.toJS()} scaleHegiht={this.state.scaleHegiht > 0 ? this.state.scaleHegiht : 0}></TopMsg>
                    <BottomMsg friendData={this.props.friendData.toJS()}></BottomMsg>
                </div>
            </FStyle>
        );
    }
    async componentDidMount() {
        await this.props.loadData(this.props.match.params.userId)
        let bs = new BScroll('.bScroll', {
            scrollY: true,
            click: true,
            probeType: 3
        })
        bs.on('scroll', (e) => this.onScroll(e))

        console.log(this.props.match.params.userId)
    }

    onScroll(e) {
        this.setState({
            scaleHegiht: this.scaleHegiht = e.y
        })
    }
}

export default connect(mapState, mapDispatch)(withRouter(Friend));
