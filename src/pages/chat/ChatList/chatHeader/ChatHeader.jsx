import React, { Component } from 'react'
import StyledChatHeader from './StyledChatHeader'

export default class ChatHeader extends Component {
    render() {
        return (
            <StyledChatHeader>
                <i>></i>
                <div><span>关注列表</span></div>
            </StyledChatHeader>
        )
    }
}
