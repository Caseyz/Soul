import React, { Component } from 'react'
import styled from 'styled-components'
import voicePic from 'assets/images/square/voice.png'

const VoiceStyle = styled.div`
    img{
    width: 1.36rem;
    height: .25rem;
    }
`
export default class Voice extends Component {

    // componentDidMount () {
    //     fetch('http://red-mi.xyz/jsapi')
    //     .then((response) => {
    //       console.log(response)
    //       return response.json()
    //     })
    //     .then((result) => {
    //       window.wx.config({
    //         // debug: true,                  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: result.appId,          // 必填，公众号的唯一标识
    //         timestamp: result.timestamp,  // 必填，生成签名的时间戳
    //         nonceStr: result.nonceStr,    // 必填，生成签名的随机串
    //         signature: result.signature,  // 必填，签名
    //         jsApiList: [
    //           "scanQRCode",               //扫一扫接口
    //           "chooseImage",              //拍照或从手机相册中选图接口
    //           'startRecord',              //开始录音接口
    //           'stopRecord',               //停止录音接口
    //           'onVoiceRecordEnd',         //监听录音自动停止接口
    //           'playVoice',                //播放语音接口
    //           'stopVoice',                //停止播放接口
    //           'uploadVoice',              //上传语音接口
    //           'downloadVoice',            //下载语音接口
    //         ]
    //       })
    //     })
    // }



    render() {
        return (
            <VoiceStyle>
                <img src={voicePic} alt=""/>
            </VoiceStyle>
        )
    }
}
