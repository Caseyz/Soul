import React, { Component } from 'react'
import { StyledChatWinContent, BorderedInput } from './StyledChatWinContent'
import { connect } from 'react-redux'
import Talk from './Talk'
import { pushMsg, sendMsg } from 'components/socket/'
import { formatJsonDate } from 'utils/date'
import BScroll from 'better-scroll'

const mapState = (state) => {
    return {
        ws: state.getIn(['socket', 'ws']),
        msgList: [...state.getIn(['socket', 'newMsgList'])]
    }

}
const mapDispatch = (dispatch) => ({
    pushMsg: (msg) => {
        dispatch(pushMsg(msg))
    }
})
let scroll = null;
let wrapper = null;
class ChatWinContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '测试',
            msgList: []
        }
    }
    render() {
        return (
            <StyledChatWinContent >
                <div id="container" className="scroll-container">
                    <div>
                        <ul>
                            {
                                this.state.msgList.length >= 1 && (<p>{formatJsonDate(this.state.msgList[0].timeStamp)}</p>)
                            }

                            {
                                this.state.msgList && this.state.msgList.length > 0 ?
                                    this.state.msgList.map((item, key) => (
                                        <Talk direction={item.fromId == '1004' ? "right" : "left"} msg={item.msg} key={key} >
                                        </Talk>
                                    )) : ""
                            }


                        </ul>
                    </div>
                </div>
                <BorderedInput className="input" hasBorder={true}>
                    <textarea name="" id="" cols="30" rows="1" style={{ 'overflowY': 'scroll' }}
                        placeholder="请输入聊天内容..."
                        onChange={(e) => this.handleInput(this, e)}
                        onKeyDown={(e) => this.handleKeyDown(this, e)}
                        value={this.state.message}
                    >
                    </textarea>
                </BorderedInput>
            </StyledChatWinContent>
        )
    }
    componentDidMount() {
        wrapper = document.querySelector('#container')
        scroll = new BScroll(wrapper, {
            pullUpLoad: false,
            mouseWheel: true,
            scrollbar: {
                fade: false
            }
        })
    }
    static getDerivedStateFromProps(nextProps, preStates) {
        if (nextProps && nextProps.msgList.length > 0 && nextProps.match.params.id) {
            let _userMsg = nextProps.msgList.find((item) => item.id == nextProps.match.params.id)
            console.log(_userMsg)
            return {
                msgList: _userMsg ? _userMsg.msgs : []
            }
        }
        return null
    }
    componentDidUpdate() {
        if (scroll && wrapper) {
            scroll.refresh()
            scroll.scrollTo(0, scroll.maxScrollY)
        }
    }
    handleInput(obj, e) {
        this.setState({
            message: e.target.value.replace(/[\r\n]/g, "")
        })
    }
    handleKeyDown(obj, e) {
        if (e.keyCode === 13) {
            let ret = sendMsg({
                ws: this.props.ws,
                to: this.props.match.params.id,
                msg: this.state.message
            })
            this.setState({
                message: ''
            })
            if (ret) {
                this.props.pushMsg({ fromId: '1004', msg: this.state.message, timeStamp: Date.now() })
            }
        }
    }

}
export default connect(mapState, mapDispatch)(ChatWinContent)