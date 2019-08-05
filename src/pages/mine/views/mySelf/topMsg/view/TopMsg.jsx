import React, { Component } from 'react';

import { TopMsgContainer } from './TopMsgStyle'
import { Header } from '../../header/'
import Time from '../time/Time'


class TopMsg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeHeight: 300
        }
    }
    render() {
        return (
            <TopMsgContainer className="bg" style={{height:`${(this.state.changeHeight+this.props.scaleHegiht)/100}rem`}} >
                <img
                    id="H"
                    src={require('assets/images/mine/bg.png')}
                    alt=""
                    style={{
                        transform:`scale(${(this.state.changeHeight+this.props.scaleHegiht)/this.state.changeHeight})`
                    }}
                />
                <Header></Header>
                <div className="avatar">
                    <img src={require('assets/images/mine/avatar.png')} alt=""/>
                    <p>SAYN</p>
                </div>
                <div className="signature">
                    <p>只会笑的提莫</p>
                    <span></span>
                </div>
                <Time className="time"></Time>
            </TopMsgContainer>
        );
    }
    componentDidMount() {
        let H = document.getElementById("H").offsetHeight

        this.setState((prevState,props) => ({
            changeHeight: prevState.changeHeight = H
        }))

    }
}

export default TopMsg;