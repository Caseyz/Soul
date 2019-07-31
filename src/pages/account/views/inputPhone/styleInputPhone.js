import styled from 'styled-components'
const logo = require('assets/images/account/logo.png')
const line = require('assets/images/account/line.png')

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Logo = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-size: 100% 100%;
  background-image: url(${logo});
`
const LogoInfo = styled.div`
  display: flex;
  align-items: center;
  &:before{
    content: "";
    display: blcok;
    width: 0.34rem;
    height: 0.03rem;
    background-size: 0.34rem 0.03rem;
    background-repeat: no-repeat;
    background-image: url(${line})
  }
  .content{
    font-size: 0.15rem;
    color: #333;
  }
  &:after{
    content: "";
    display: block;
    width: 0.34rem;
    height: 0.03rem;
    background-size: 0.34rem 0.03rem;
    background-repeat: no-repeat;
    background-image: url(${line});
    transform: rotateZ(180deg);
  }
`
export {
  Container,
  Logo,
  LogoInfo
}