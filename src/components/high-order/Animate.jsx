import React from 'react'

import 'assets/styles/animate.css'

import { CSSTransition } from 'react-transition-group'

const Animate = (Comp) => (props) => {
  let { type, location } = props
  let isShow = location.pathname.split('/').some((item)=>item===type)
  let state = props.location.state
  let dir =  state && state.dir || 'left'
  return (
    <CSSTransition
      in={isShow}
      timeout={1000}
      classNames={{
        enter: 'animated',
        enterActive: dir === 'left' ? 'slideInLeft' : 'slideInRight',
        exit: 'animated',
        exitActive: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
      }}
      mountOnEnter
      unmountOnExit
    >
      <Comp { ...props }></Comp>
    </CSSTransition>
  )
}

export default Animate