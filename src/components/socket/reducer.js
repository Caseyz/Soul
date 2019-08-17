const defaultState = {
    ws: null,
    newMsgList: new Array()
}
let id = '1004'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'createSocket':
            return {
                ws: action.payload,
                newMsgList: state.newMsgList
            }
        case 'pushMsg':
            const find = state.newMsgList.find((item) => {
                if (action.payload.fromId == id) {
                    // alert(1)
                    return (item.id == action.payload.to)
                } else {
                    // alert(2)
                    return (item.id == action.payload.fromId)
                }
            })//id

            if (!find || find.length <= 0) {

                return {
                    newMsgList: [...state.newMsgList,
                    {
                        id: action.payload.fromId == id ? action.payload.to : action.payload.fromId,
                        msgs: [
                            {
                                fromId: action.payload.fromId,
                                to: action.payload.to,
                                msg: action.payload.msg,
                                timeStamp: action.payload.timeStamp
                            }
                        ]
                    }],
                    ws: state.ws
                }
            }
            else {
                find.msgs = [...find.msgs, { fromId: action.payload.fromId, msg: action.payload.msg, timeStamp: action.payload.timeStamp }]
                console.log(find, "findfind")

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