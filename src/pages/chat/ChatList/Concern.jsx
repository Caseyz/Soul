import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import ChatHeader from './chatHeader/ChatHeader'
import ChatNav from './chatNav/ChatNav'
import ChatItems from './chatItems/ChatList'
import axios from 'axios'

const tabs = [
  { title: 'First Tab', sub: '1' },
  { title: 'Second Tab', sub: '2' },
  { title: 'Third Tab', sub: '3' },
];

class Concern extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreen: '1'
    }
  }
  render() {
    return (
      <>
        <ChatHeader></ChatHeader>
        <ChatNav></ChatNav>
        <div style={{height:"40px",border:'1px solid #aaa'}}></div>
        <ChatItems></ChatItems>
      </>
    )
  }
  async componentDidMount(){
    try {
      const response = await axios.get('/mobileWeb/catalogroot');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Concern;