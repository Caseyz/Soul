import React, { Component } from 'react'
import {StyledChatItem,BorderedItem} from './StyledChatItem'
import EllipsisSpan from './WrapedSpan'
export default class ChatItem extends Component {
    render() {
        return (
            <StyledChatItem>
                <BorderedItem className="item-container" onClick={this.handleItemClick.bind(this,this.props.id,this.props.username)}>
                    <div className="left">
                        <img src="http://via.placeholder.com/40px*40px" alt=""/>
                        <div>
                            <h4>{this.props.username}</h4>
                            <EllipsisSpan></EllipsisSpan>
                        </div>
                    </div>
                    <div className="right">
                        <span>{this.props.dateTime}</span>
                    </div>
                </BorderedItem>
            </StyledChatItem>
        )
    }
    handleItemClick(id,username){
        this.props.history.push({ pathname: `chat/message/${id}`, query : { username} })
    }
}
