import styled from 'styled-components'
import border from 'components/style/border'
import phone from 'assets/images/account/phone.png'
import code from 'assets/images/account/code.png'
import pwd from 'assets/images/account/pwd.png'

// 图标处理
const Label = styled.div`
  padding-left: 0.26rem;
  height: 0.25rem;
  font-size: 0.12rem;
  display: flex;
  align-items: center;
`;
const iconLabel = (iconName)=>{
  let icon = {}
  if( iconName==='phone' ) {
    icon.width = '0.16rem'
    icon.height = '0.25rem'
    icon.img = phone
  }
  if( iconName==='code' ) {
    icon.width = '0.19rem'
    icon.height = '0.15rem'
    icon.img = code
  }
  if( iconName==='pwd' ) {
    icon.width = '0.15rem'
    icon.height = '0.19rem'
    icon.img = pwd
  }
  return styled(Label)`
    background-size: ${icon.width} ${icon.height};
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url(${icon.img});
  `
}
const PhoneLabel = iconLabel('phone')
const CodeLabel = iconLabel('code')
const PwdLabel = iconLabel('pwd')

// 输入框处理
const Input = styled.div`
  padding: 0.15rem 0 0.16rem;
  display: flex;
  align-items: center;
  & > input {
    border: none;
    font-size: 0.14rem;
    line-height: 0.14rem;
    height: 0.14rem;
    color: #999;
    margin: 0;
    padding: 0;
  }
  & > .text {
    font-size: 0.12rem;
    color: #333;
  }
  & > .arrow {
    margin-right: 0.1rem;
    display: flex;
    align-items: center;
    font-size: 0.12rem;
    .text{
      font-size: 0.12rem;
      line-height: 0.12rem;
      margin-right: 0.08rem;
    }
    &::after {
      content: "";
      display: block;
      width: 0rem;
      height: 0rem;
      border-top: 0.07rem solid #000;
      border-left: 0.045rem solid transparent;
      border-right: 0.045rem solid transparent;
    }
  }
`
const LineInput = border({
  component: Input,
  borderWidth: '0 0 1px 0'
})

// 输入框外层contaienr
const FormContainer = styled.div`
  padding-top: 0.27rem;
`

export {
  PhoneLabel,
  CodeLabel,
  PwdLabel,
  FormContainer,
  LineInput
}