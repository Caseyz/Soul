import React from 'react'
 
const InputPhoneUI = (props) => {
   return (
    <>
      <input type="number"
        onChange={props.setPhone}
        value={props.phone}
      />
      <button 
        onClick={props.checkPhone}
        disabled={props.rulePhone ? false : true}
      >测试</button>
    </>
   )
}

export default InputPhoneUI