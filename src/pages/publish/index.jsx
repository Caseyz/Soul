import React, { Component } from 'react'

//组件
import Header from './header/'
import Main from './main/'
import Footer from './footer/'

class Publish extends Component {
 render(){

   return (
     <>
      <Header {...this.props}></Header>
      <Main></Main>
      <Footer></Footer>
     </>
   )
 }
}



export default Publish