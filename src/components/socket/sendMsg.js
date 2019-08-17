function sendMsg(ws = null, {
    to = '',
    from = '',
    msg = '没写消息'
}) {
    if (ws) {
        // var msg = '{"from":"' + from + '","to":"' + to + '","message":"' + msg + '"}'
        let message = { from, to, msg }
        ws.send(JSON.stringify(message))
        console.log("send============,",message)
        return true
    } else {
        return false
    }
}
export default sendMsg