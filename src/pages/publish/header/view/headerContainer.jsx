import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './headerUI'

import http from 'utils/http'
import moment from 'moment'; 

const mapStateToprops = state => {
  return {
      voice: state.getIn(['publish', 'voice']),
      img: state.getIn(['publish', 'img']),
      value: state.getIn(['publish', 'value']),
  }
}

class HeaderContainer extends Component {

  constructor () {
    super()

    this.publish = this.publish.bind(this)
    this.goback = this.goback.bind(this)
  }
   
 render(){
   return (
     <Header 
        goback={ this.goback }
        publish = { this.publish }
     />
   )
 }

 goback(){
    this.props.history.goBack()
 }

 async publish () {
  var url = 'https://wx.zhaoyx0907.com/api/senddynamic'
  moment.locale('zh-cn'); 
  var data = {
    note: this.props.value,
    libname: this.props.voice,
    image: this.props.img,
    time: moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
  }
  var res = await http.post(url, data)
  if(res == 0 )
{
  console.log(this.props.history)
} 
}

}

export default connect(mapStateToprops)(HeaderContainer)