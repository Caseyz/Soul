import React from 'react'
import { Logo, LogoInfo, Container } from './styleInputPhone'

 
const InputPhoneUI = (props) => {
   return (
    <Container>
      <Logo></Logo>
      <LogoInfo>
        <div className="content">跟随灵魂找到你</div>
      </LogoInfo>
      <input type="number"
        onChange={props.setPhone}
        value={props.phone}
      />
      <button 
        onClick={props.checkPhone}
        disabled={props.rulePhone ? false : true}
      >测试</button>
    </Container>
   )
}

export default InputPhoneUI