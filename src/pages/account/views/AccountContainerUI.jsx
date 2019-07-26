import React from 'react'
// 组件
import Animate from 'components/high-order/Animate'
import InputCodeUI from './InputCodeUI'
import InputPhoneUI from './InputPhoneUI'
import InputPwdUI from './InputPwdUI'
 
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

export default AccountContainerUI
// export default Animate(AccountContainerUI)