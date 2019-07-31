import React from 'react'
// 组件
import Animate from 'components/high-order/Animate'
import InputCodeUI from './inputCode/InputCodeUI'
import InputPhoneUI from './inputPhone/InputPhoneUI'
import InputPwdUI from './inputPwd/InputPwdUI'
 
const AccountContainerUI = (props) => {
   let Comp
   if( props.type==='inputphone' ) {
    Comp = InputPhoneUI
   }else if( props.type==='login' ) {
     Comp = InputPwdUI
   }else if( props.type==='code' ) {
     Comp = InputCodeUI
   }
   return (
     <>
       <Comp {...props}></Comp>
     </>
   )
}

// export default AccountContainerUI
export default Animate(AccountContainerUI)