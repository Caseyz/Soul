import React, { Component } from 'react'
import StyledChatNav from './StyledChatNav'
export default class ChatNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeId: 0
        }
    }
    handleMatchClick(type) {
        this.setState({
            activeId: type
        })
        this.props.onTabChange(type)
    }
    handleFocusClick(type) {
        this.props.location
    }
    render() {
        return (
            <StyledChatNav>
                <div onClick={this.handleMatchClick.bind(this, 0)}>
                    <i>
                        <span className={this.state.activeId === 0 ? "active" : ""}>允许匹配</span>
                    </i>
                </div>
                <div>
                    <i>
                        <span >聊天</span>
                    </i>
                </div>
                <div onClick={this.handleFocusClick.bind(this, 1)}>
                    <i>
                        <span> 关注</span>
                    </i>
                </div>
            </StyledChatNav>
        )
    }
}

