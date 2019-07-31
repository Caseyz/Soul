import React from 'react'
 
const InputPwdUI = (props) => {
   return (
    <>
      <input 
        type="password"
        value={props.password}
        onChange={props.setPassword}
      />
      <button 
        onClick={props.toLogin}
        disabled={props.rulePassword ? false : true}
      >密码</button>
    </>
   )
}

export default InputPwdUI