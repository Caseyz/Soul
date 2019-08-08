import { ISLOGIN, SETPHONE } from './actionTypes'

const setLoginState = (isLogin) => {
  return {
    type: ISLOGIN,
    payload: isLogin
  }
}
const setPhone = (phone) => {
  return {
    type: SETPHONE,
    payload: phone
  }
}

export {
  setLoginState,
  setPhone
}