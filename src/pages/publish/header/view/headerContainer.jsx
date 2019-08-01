import React, { Component } from 'react'
import Header from './headerUI'

class HeaderContainer extends Component {
   
 render(){
   return (
     <Header goback={this.goback.bind(this)}></Header>
   )
 }

 goback(){
    this.props.history.goBack()
 }

}

export default HeaderContainer