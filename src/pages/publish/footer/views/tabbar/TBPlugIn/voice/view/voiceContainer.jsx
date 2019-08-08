import React, { Component } from 'react'
import { VoiceST } from './voiceStyle'

import tuoyan from 'assets/images/publish/椭圆 3@3x.png'
import bofang from 'assets/images/publish/椭圆 1 拷贝 2@3x.png'
import quxiao from 'assets/images/publish/矩形 10@3x.png'
import queren from 'assets/images/publish/矩形 10 拷贝@3x.png'

class Voice extends Component {
  constructor() {
    super()

    this.state = {
      isluyin: false,
      time: 0,
      endluyin: false,
      localVoiceId: ''
    }

    this.startRecord = this.startRecord.bind(this)
    this.endRecord = this.endRecord.bind(this)
    this.giveUpRecord = this.giveUpRecord.bind(this)
    this.playRecord = this.playRecord.bind(this)
  }

  render () {
    return (
      <VoiceST id='VoiceST'>
        {
          !this.state.endluyin ?
            (
              !this.state.isluyin ?
                (<>
                  <div className='huatong'></div>
                  <div className='luyin' onClick={this.startRecord}></div>
                  <div className='clickluyin' >点击录音</div>
                  <div className='time'>0S</div>
                </>)
                :
                (<>
                  <div className='time'>{this.state.time}S</div>
                  <img className='luyinzhong'
                    src={tuoyan}
                    onClick={this.endRecord}
                  />
                  <div className='clickluyin'>录音中</div>
                </>)
            )
            :
            (<>
              <div className='time'>{this.state.time}S</div>
              <img className='quxiao'
                src={quxiao}
                onClick = { this.giveUpRecord }
              />
              <img className='bofang'
                src={bofang}
                onClick = { this.playRecord }
              />
              <img className='queren' src={queren}></img>
              <div className='clickluyin' >点击播放</div>
            </>)
        }
      </VoiceST>
    )
  }

  //点击录音切换界面
  startRecord () {
    this.setState({
      isluyin: true
    })

    this.timer = setInterval(() => {
      this.setState((state, props) => ({
        time: state.time + 1
      }))
    }, 1000)
  }

  //点击录音中，结束录音，到播放界面
  endRecord () {
    this.setState({
      endluyin: true,
      isluyin: false,
    })

    clearInterval(this.timer)
  }

  //点击播放按钮
  playRecord () {
    this.timer = setInterval(() => {
      if (this.state.time > 0) {
        this.setState((state, props) => ({
          time: state.time - 1
        }))
      }
    }, 1000)
  }

  //点击垃圾箱，放弃录音并初始化页面
  giveUpRecord () {
    this.setState({
      isluyin: false,
      time: 0,
      endluyin: false,
      localVoiceId: []
    })
  }



  componentDidMount () {
    var that = this
    fetch('http://red-mi.xyz/jsapi')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        window.wx.config({
          // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.appId, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.nonceStr, // 必填，生成签名的随机串
          signature: result.signature,// 必填，签名
          jsApiList: [
            "scanQRCode",//扫一扫接口
            "chooseImage",//拍照或从手机相册中选图接口
            'startRecord',//开始录音接口
            'stopRecord',//停止录音接口
            'onVoiceRecordEnd',//监听录音自动停止接口
            'playVoice',//播放语音接口
            'stopVoice',//停止播放接口
            'uploadVoice'//上传语音接口
          ]
        })
        window.wx.ready(function () {

          document.querySelector('#VoiceST').addEventListener('click', (e) => {
            //开始录音
            if (e.target.classList[0] === 'luyin') {
              window.wx.startRecord();
            }

            //停止录音
            if (e.target.classList[0] === 'luyinzhong') {
              window.wx.stopRecord({
                success: function (res) {
                  that.localVoiceId = res.localId;
                }
              });
            }

            //播放超过60s自动停止
            window.wx.onVoiceRecordEnd({
              complete: function (res) {
                that.localVoiceId = res.localId;
                that.endluyin()
              }
            });

            //播放
            if (e.target.classList[0] === 'bofang') {
              window.wx.playVoice({
                localId: that.localVoiceId // 需要播放的音频的本地ID，由stopRecord接口获得
              });
            }
          })
        })
      })
  }
}

export default Voice

// window.wx.chooseImage({
            //   count: 5, // 默认9
            //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            //   success: function (res) {
            //     var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            //     console.log(localIds)
            //     if(localIds.length <= 1){
            //         var a = document.createElement('img')
            //         a.src = localIds
            //         document.querySelector('#img').append(a)
            //     }else{
            //         localIds.forEach(pic => {
            //             var a = document.createElement('img')
            //             a.src = pic
            //             document.querySelector('#img').append(a)
            //         });
            //     }
            //   }
            // });