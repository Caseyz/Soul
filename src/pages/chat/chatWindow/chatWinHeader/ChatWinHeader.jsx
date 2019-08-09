import React, { Component } from 'react'
import StyledChatWinHeader from './StyledChatWinHeader'
export default class ChatWinHeader extends Component {
    render() {
        return (
            <StyledChatWinHeader>
                <i onClick={this.handleBackClick.bind(this)}></i>
                <div><span>{this.props.username}</span></div>
            </StyledChatWinHeader>
        )
    }
    handleFocusClick(){
        this.props.history.push('/focus')
    }
}
