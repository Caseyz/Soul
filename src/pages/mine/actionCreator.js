import { SETPHONE } from './actionTypes'


const setPhone = (phone) => {
  return {
    type: SETPHONE,
    payload: phone
  }
}

export {
  setPhone
}