import React from 'react'
import {
  PhoneLabel,
  CodeLabel,
  PwdLabel,
  FormContainer,
  LineInput
} from './components/form/styledFormGroup'
import InputGroup from './components/InputGroup'
import { FlexMidCen } from './components/layout/StyledFlex'
 
const InputPhoneUI = (props) => {
   let Comp = PhoneLabel
   let title = '手机'
   if( props.type=== 'password') {
     Comp = PwdLabel
     title = '密码'
   }
   if( props.type=== 'code' ) {
     Comp = CodeLabel
     title = '验证码'
   }
   return (
    <>
      <FormContainer>
        <Comp>{title}</Comp>
        <LineInput
          hasBorder={props.type==='code' ? false : true}
        >
          {
            props.type==='phone'
              ? (
                  <div className="arrow">
                    <div className="text">+86</div>
                  </div>
                )
              : ""
          }
          {
            props.type==='code'
             ? (
                <FlexMidCen>
                  <InputGroup
                    getValue={props.setCode}
                    length={4}
                    type={'box'}
                  ></InputGroup>
                </FlexMidCen>
                )
             : 
              props.type==='phone'
              ? (
                  <input 
                    type="number"
                    value={props.phone}
                    onChange={props.setPhone}
                  />
                )
              : 
                props.type==='password'
                ? (
                    <input 
                      type="password"
                      value={props.password}
                      onChange={props.setPassword}
                    />
                  )
                : ""
          }
        </LineInput>
      </FormContainer>
    </>
   )
}

export default InputPhoneUI