import Redux from 'redux'
const defaultState = {
    chatList: [],
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'getChatList':
            console.log(action,666)
            return {
                chatList: action.payLoad
            }
        default:
            return state
    }
}

export default reducer