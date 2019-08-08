import React, { Component } from 'react'
import StyledChatItem from './StyledChatItem'
import EllipsisSpan from './WrapedSpan'
export default class ChatItem extends Component {
    render() {
        return (
            <StyledChatItem>
                <div className="item-container">
                    <div className="left">
                        <img src="http://via.placeholder.com/40px*40px" alt=""/>
                        <div>
                            <h4>{this.props.userName}</h4>
                            <EllipsisSpan>聊天内容聊天内容聊天内容聊天内容聊天内容聊天内容</EllipsisSpan>
                        </div>
                    </div>
                    <div className="right">
                        <span>8月7日下午 09:53</span>
                    </div>
                </div>
            </StyledChatItem>
        )
    }
}
