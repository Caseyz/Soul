import React, { Component } from 'react'
import StyledChatItem from './StyledChatItem'
export default class ChatItem extends Component {
    render() {
        return (
            <StyledChatItem>
                <div className="left">
                    <img src="http://via.placeholder.com/40px*40px" alt=""/>
                    <div>
                        <h4>沉默的羔羊呀</h4>
                        <span>37天，121瞬间</span>
                    </div>
                </div>
                <div className="right">
                    <i></i>
                    <span>取消关注</span>
                </div>

            </StyledChatItem>
        )
    }
}
