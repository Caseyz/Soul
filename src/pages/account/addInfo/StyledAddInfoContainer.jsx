import React from 'react'
import { FlexMidCen } from '../_components/layout/'
import { 
    InputGroup,
    LineInput,
    Input,
    Text
} from '../_components/form-group/'
import Button from '../_components/button/Button'

import { DatePicker} from 'antd-mobile'
import enUs from 'antd-mobile/lib/date-picker/locale/en_US'

import style from './style'
import logoImg from 'assets/images/account/logo.png'

 
const StyledAddInfoContainer = (props) => {
   let {
     head,
     setHead,
     username,
     setUsername,
     sign,
     setSign,
     birth,
     setBirth,
     pwd,
     setPwd,
     equalPwd
   } = props
   return (
     <>
       <div style={style.title}>HI,请完善您的信息</div>
       <div style={style.tip}>填写正确信息有助于匹配，我们将保护好您的私人信息</div>
       <FlexMidCen style={{width: '100%'}}>
         <div style={style.headWrap}>
          <div style={style.headCover}></div>
          <img src={logoImg} alt="" style={{width: '100%', height: '100%'}}/>
         </div>
       </FlexMidCen>
       
       <div className="info-wrap">
        <InputGroup 
         hasBorder={true}
         padding={'0.1rem 0 0.13rem'}
         title='昵称'
         type='text'
         value={username}
         onChange={setUsername}
        ></InputGroup>
        {/* <LineInput hasBorder={true}>
          <div className="text" style={{marginRight: '0.2rem'}}>
            签名
          </div>
          <input type="text" name="username" id=""
            value={sign}
            onChange={setSign}
          />
        </LineInput> */}
        
        <DatePicker
          mode="date"
          title="选择生日"
          extra="Optional"
          value={birth}
          onChange={setBirth}
        >
            <div>
                <InputGroup
                hasBorder={true}
                padding={'0.1rem 0 0.13rem'}
                title='生日'
                type='text'
                value={birth}
                readOnly
                ></InputGroup>
            </div>
        </DatePicker>

        <InputGroup 
         hasBorder={true}
         padding={'0.1rem 0 0.13rem'}
         title='密码'
         type='password'
         value={pwd}
         getValur={setPwd}
        ></InputGroup>

        <LineInput hasBorder={true} padding={'0.1rem 0 0.13rem'}>
          <Text>再次输入密码</Text>
          <Input 
            type='password'
            onBlur={equalPwd}
          />
        </LineInput>
       
       </div>

       <FlexMidCen style={{marginTop: '0.44rem'}}>
        <Button 
         type={'normal'}
         handleClick={()=>{console.log(1)}}
        >
          完成
        </Button>
       </FlexMidCen>
     </>
   )
}

export default StyledAddInfoContainer