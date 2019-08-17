var test=true;
function sendMsg(ws = null, {
    to = '',
    from = '',
    msg = '没写消息'
}) {
    if (ws) {
        if(test){
            var msg = '{"from":"' + from + '","to":"' + to + '","message":"' + msg + '"}'
            ws.send(msg)
            console.log("send============,",msg)
        }else{
            let message = { from, to, msg }
            ws.send(JSON.stringify(message))

            console.log("send============,",message)
        }
        return true
    } else {
        return false
    }
}
export default sendMsg