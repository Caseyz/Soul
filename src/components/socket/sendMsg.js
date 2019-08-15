function sendMsg({
    ws = null,
    to = '',
    msg = '没写消息'
}) {
    if (ws) {
        var msg = '{"uid":"' + to + '","to":"' + to + '","message":"' + msg + '"}'
        ws.send(msg)
        console.log("send============")
        return true
    }else{
        return false
    }
}
export default sendMsg