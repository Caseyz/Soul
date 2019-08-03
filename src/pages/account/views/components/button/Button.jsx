import React, { Component } from 'react'
import {StyledButton, Loading, DisStyledButton} from './styleButton'

import radioBox from 'assets/images/account/radio-box.png'
import radioDisBox from 'assets/images/account/radio-disable-box.jpg'

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'normal'
    }
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if( nextProps.type!=nextState.type ){
      return {
        type: nextProps.type
      }
    }
    return null
  }
  render() {
    return (
      <>
        {

        }
      {
        this.props.type === 'normal'
        ? (<StyledButton
            onClick={this.props.handleClick}
          >
            {this.props.children}
          </StyledButton>)
        : ""
      }
      {
        this.props.type === 'loading'
        ? (<StyledButton>
            <Loading></Loading>
          </StyledButton>)
        : ""
      }
      {
        this.props.type === 'disable'
        ? (<DisStyledButton>
            {this.props.children}
          </DisStyledButton>)
        : ""
      }
      </>
    )
  }
}
export default Button