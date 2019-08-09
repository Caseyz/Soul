import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import Concern from './ChatList/Concern'
import ChatWinContainer from './chatWindow/ChatWinContainer'


export default class ChatRoot extends Component {
    render() {
        return (
            <div>
                <Route path='/chat' component={Concern} exact></Route>
                <Route path="/chat/message/:id" component={ChatWinContainer}></Route>
            </div>
        )
    }
}
