import React from 'react'
import { Container, FlexMidCen } from '../components/layout/StyledFlex'
import { LineInput } from '../components/form/styledFormGroup'
import Button from '../components/button/Button'

import { DatePicker, List } from 'antd-mobile'
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
     <Container>
       <div style={style.title}>HI,请完善您的信息</div>
       <div style={style.tip}>填写正确信息有助于匹配，我们将保护好您的私人信息</div>
       <FlexMidCen style={{width: '100%'}}>
         <div style={style.headWrap}>
          <div style={style.headCover}></div>
          <img src={logoImg} alt="" style={{width: '100%', height: '100%'}}/>
         </div>
       </FlexMidCen>
       <div className="info-wrap">
        <LineInput hasBorder={true}>
          <div className="text" style={{marginRight: '0.2rem'}}>
            昵称
          </div>
          <input type="text" name="username" id=""
            value={username}
            onChange={setUsername}
          />
        </LineInput>
        <LineInput hasBorder={true}>
          <div className="text" style={{marginRight: '0.2rem'}}>
            签名
          </div>
          <input type="text" name="username" id=""
            value={sign}
            onChange={setSign}
          />
        </LineInput>
        
        <DatePicker
          mode="date"
          title="选择生日"
          extra="Optional"
          value={birth}
          onChange={setBirth}
        >
          <LineInput hasBorder={true}>
            <div className="text" style={{marginRight: '0.2rem'}}>
              生日
            </div>
            <input type="text"
              value={birth}
              readOnly
            />
          </LineInput>
        </DatePicker>
        <LineInput hasBorder={true}>
          <div className="text" style={{marginRight: '0.2rem'}}>
            密码
          </div>
          <input type="text" name="username" id=""
            value={pwd}
            onChange={setPwd}
          />
        </LineInput>
        <LineInput hasBorder={true}>
          <div className="text" style={{marginRight: '0.2rem'}}>
            再次输入密码
          </div>
          <input type="text" name="username" id=""
            onBlur={equalPwd}
          />
        </LineInput>
       </div>
       <FlexMidCen style={{marginTop: '0.44rem'}}>
        <Button type={'normal'}>
          完成
        </Button>
       </FlexMidCen>
     </Container>
   )
}

export default StyledAddInfoContainer