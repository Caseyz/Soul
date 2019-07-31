import React from 'react'
 
const InputCodeUI = (props) => {
   return (
     <div>
       InputCodeUI
       <button onClick={props.getCode}>获取验证码</button>
       <input type="text"
        onChange={props.toCode}
       />
     </div>
   )
}

export default InputCodeUI