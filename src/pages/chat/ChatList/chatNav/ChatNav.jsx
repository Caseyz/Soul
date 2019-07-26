import React, { Component } from 'react'
import StyledChatNav from './StyledChatNav'
export default class ChatNav extends Component {
    render() {
        return (
            <StyledChatNav>
                <div>
                    <strong>2</strong>
                    <i>
                        <span className="active">我关注的</span>
                    </i>

                </div>
                <div>
                    <strong>2</strong>
                    <i>
                        <span className="active">密友</span>
                    </i>
                </div>
                <div>
                    <strong>2</strong>
                    <i>
                        <span className="active">关注我的</span>
                    </i>
                </div>
            </StyledChatNav>
        )
    }
}

