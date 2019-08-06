import { GETFOCUS, VALUE } from './actionTypes'

const getFocus = (data) => {
    return {
        type: GETFOCUS,
        data
    }
}


const value = (data) => {
    return {
        type: VALUE,
        data
    }
}

export {
    getFocus,
    value
}