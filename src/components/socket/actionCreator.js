const createSocket = (from) => {
    return (dispatch) => {
        if ("WebSocket" in window) {
            let ws = new WebSocket("ws://139.199.34.125:7007/chat/" + from)
            ws.onopen = function () {
                // setMessage("连接成功")
                console.log('socket链接成功')
                dispatch({
                    type: 'createSocket',
                    payload: ws
                })
            }
            ws.onmessage = function (event) {
                // setMessage(event.data)
                console.log(event, "接收到消息" + event)
                if (event.data != '对方不在线') {
                    dispatch({
                        type: 'pushMsg',
                        payload: { fromId: "1002", msg: event.data }
                    })

                }
            }    

            ws.onerror = function () {
                // setMessage("出错了")
                console.log('出错了')
            }
            ws.onclose = function () {
                // setMessage("关闭")
                console.log('关闭')
            }
        } else {
            alert("你是谁,来自哪里,为什么有上古世纪的电脑")
        }

    }

    // function setMessage(message) {
    //     document.getElementById("content").innerHTML = message;
    // }
}
const pushMsg = (msg) => {
    return (dispatch) => {
        dispatch({
            type: 'pushMsg',
            payload: msg

        })
    }
}

export { createSocket, pushMsg }