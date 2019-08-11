import { GETFOCUS, VALUE, IMG, VOICE, SERVERID } from './actionTypes'

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

const img = (data) => {
    return {
        type: IMG,
        data
    }
}

const voice = (data) => {
    return {
        type: VOICE,
        data
    }
}

const serverid = (data) => {
    return {
        type: SERVERID,
        data
    }
}


export {
    getFocus,
    value,
    img,
    voice,
    serverid
}