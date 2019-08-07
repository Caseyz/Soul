import React, { Component } from 'react'
import ChatItemUI from '../../ChatList/chatItems/ChatItemUI'
import Axios from 'axios'
export default class FocusList extends Component {
    render() {
        return (
            <div>{
                this.props.list.map((item,index)=>{
                    return <ChatItemUI {...item} key={item.id}></ChatItemUI>
                })
            }
            </div>
        )
    }
}
