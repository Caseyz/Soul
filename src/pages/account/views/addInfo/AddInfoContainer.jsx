import React, { Component } from 'react'

import StyledAddInfoContainer from './StyledAddInfoContainer'

class AddInfoContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      head: '',
      username: '',
      sign: '',
      birth: '',
      pwd: ''
    }
  }
  setHead = (e) => {
    console.log(1)
  }
  setUsername = (e) => {
    console.log(2)
  }
  setSign = (e) => {
    console.log(3)
  }
  setBirth = (e) => {
    console.dir(e)
    this.setState({
      birth: e
    })
  }
  setPwd = (e) => {
    console.log(5)
  }
  equalPwd = (e) => {
    console.log(e)
  }
  render() {
    return (
      <>
        <StyledAddInfoContainer
          {...this.state}
          setHead={this.setHead}
          setUsername={this.setUsername}
          setBirth={this.setBirth}
          setPwd={this.setPwd}
          equalPwd={this.equalPwd}
        />
      </>
    )
  }
}
export default AddInfoContainer