import React from 'react' 
import { LogoWrap, LogoInfo, Logo } from './components/logo/styleInputPhone'

import InputContainer from './InputContainer'

import Button from './components/button/Button'
import {FlexMidCen, Container} from './components/layout/StyledFlex'

import './account.css'

// 测试组件
import AddInfoContainer from './addInfo/AddInfoContainer'


export default (props)=>{
  let {
    phone,
    setPhone,
    rulePhone,
    checkPhone,
    password,
    isForgetPwd,
    forgetPwd,
    setPassword,
    toLogin,
    rulePassword,
    getCode,
    toCode,
    setCode,
    isCheck,
    registered,
    btnText,
    btnState,
    loginByCode,
  } = props
  // 正常按钮事件处理
  let type = 'phone'
  let handleClick = checkPhone
  if( isCheck && registered && !isForgetPwd ) {
    type = 'password'
    handleClick = toLogin
  } else if (isCheck && (!registered || isForgetPwd)) {
    type = 'code'
    handleClick = toCode
  }
  // 按钮状态管理
  let btnType = 'disable'
  if( btnState===1 ){
    btnType = 'loading'
  }else if( btnState===2 ){
    btnType = 'normal'
  }
  console.log(btnState)

  // 渲染 验证码 或 密码输入
  const renderChannel = ()=>{
    if( rulePhone && isCheck ) {
      if( registered && !isForgetPwd && !loginByCode ) {
        return (
          <>
            <InputContainer
              type="password"
              password={password}
              setPassword={setPassword}
              rulePassword={rulePassword}
            ></InputContainer>
            <div className="forget-wrap">
              <div 
                className="text"
                onClick={forgetPwd}
              >忘记密码</div>
              <div className="text">注册</div>
            </div>
          </>
        )
      }else {
        return (
          <>
            <div className="code-wrap">
              <div 
                className="text"
                onClick={getCode}
              >发送验证码</div>
            </div>
            <InputContainer
              type="code"
              getCode={getCode}
              setCode={setCode}
            ></InputContainer>
          </>
        )
      }
    }
  }

  return (
    <Container>
      <LogoWrap>
        <Logo></Logo>
        <LogoInfo>
          <div className="content">跟随灵魂找到你</div>
        </LogoInfo>
      </LogoWrap>
      <InputContainer
        type="phone"
        phone={phone}
        setPhone={setPhone}
        checkPhone={checkPhone}
      ></InputContainer>
      {renderChannel()}
      <FlexMidCen className='margint'>
        <Button
          type={btnType}
          handleClick={btnState===2 ? handleClick : ""}
        >{btnText}</Button>
      </FlexMidCen>
    </Container>
  )
  // return (
  //   <AddInfoContainer></AddInfoContainer>
  // )
}