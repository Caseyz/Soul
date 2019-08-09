
import http from 'utils/http'
const asyncGetChatListData = () => {
    return async (dispatch) => {
        const ret=await http.get('/getfocus',{});
        console.log(ret)
        dispatch({
            type: "getChatList",
            payLoad: ret.focus
        })
    }
}

export {
    asyncGetChatListData
}