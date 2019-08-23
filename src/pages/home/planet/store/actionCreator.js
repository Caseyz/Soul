import { Planet_USER_Msg } from './actionType'

import http from 'utils/http'

import commont from 'utils/function.js'

// 同步星球用户数据更新
const getPlanetDataSync = (data) => {
    let newData = data.map((value, index) => {
        if (index % 13 === 0) {
            return {
                twinkleColor: commont.getRandomColor(),
                isTwinkle: true,
                ...value
            }
        }if(index % 12 === 0){
            return {
                // twinkleColor: commont.getRandomColor(),
                 isTwinkle: true,
                ...value
            }
        }
        return {
            // twinkleColor: commont.getRandomColor(),
            // isTwinkle: true,
            ...value
        }
    })

    return {
        type: Planet_USER_Msg,
        data: newData
    }
}

// 异步星球用户数据更新
const getPlanetDataAsync = (value) => {
    const url = http._OriginURL('/allusers')
    const data = value ? value : {
        sex: null,
        age_1: null,
        age_2: null,
        constellation: null,
        size: 50
    }

    return async (dispatch) => {
        let result = await http.post(url, data)
        dispatch(getPlanetDataSync(result.userlist))
    }
}

export {
    getPlanetDataSync,
    getPlanetDataAsync
}