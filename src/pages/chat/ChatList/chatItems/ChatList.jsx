import React, { Component } from 'react'
import ChatItemUI from './ChatItemUI'
import StyledChatList from './StyledChatList'
import Axios from 'axios'
export default class ChatList extends Component {
    render() {
        return (
            <StyledChatList>
                <div className="listHead">
                    <span>全部消息</span>
                    <i></i>
                </div>
                <div>{this.props.list&&this.props.list.length>0?
                    this.props.list.map((item,index)=>{
                        return <ChatItemUI {...item} key={item.id}></ChatItemUI>
                    }):""
                }
                </div>
               
            </StyledChatList>

        )
    }
}
