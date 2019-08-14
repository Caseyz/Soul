const defaultState = {
    ws: null,
    newMsgList: new Array()
}
let id='1002'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'createSocket':
            return {
                ws: action.payload,
                newMsgList: state.newMsgList
            }
        case 'pushMsg':
            let find = state.newMsgList.find((item) => (item.id === id))
            if (!find) {
                return {
                    newMsgList: [...state.newMsgList,{ id: id, msgs: [{fromId:action.payload.fromId,msg:action.payload.msg}] }],
                    ws: state.ws
                }
            }
            else {
                find.msgs=[...find.msgs,{fromId:action.payload.fromId,msg:action.payload.msg}]
                return {
                    newMsgList: [...state.newMsgList],
                    ws: state.ws
                }
            }
        default:
            return state
    }
}
export default reducer;