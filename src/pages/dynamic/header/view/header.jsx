import React, { Component } from 'react'

import Head from './header'

class Header extends Component {
 render(){
   return (
     <>
      <Head className="header">
        <div className="header_top"></div>
        <div className="header_b">
          <div className="header_goBack_icon"></div>
          <div className="issue">发布</div>
        </div>
      </Head>
     </>
   )
 }
}

export default Header