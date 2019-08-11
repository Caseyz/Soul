import React, { Component } from 'react'

import { connect } from 'react-redux'

import FooterUI from './footerUI'

import { voice, img, serverid } from '../../actionCreator'

const mapStateToprops = state => {
    return {
        voice: state.getIn(['publish', 'voice']),
        img: state.getIn(['publish', 'img']),
        serverid: state.getIn(['publish', 'serverid']),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        amendVoice (data) {
            dispatch(voice(data))
        },

        amendImg (data) {
            dispatch(img(data))
        },
        amendServerid (data) {
            dispatch(serverid(data))
        }
    }
}

class FooterContainer extends Component {
    constructor() {
        super()
        this.state = {
            setUp: 'active',
        }

        this.setUpClick = this.setUpClick.bind(this)
        this.stopClick = this.stopClick.bind(this)
        this.labelClick = this.labelClick.bind(this)
        this.moreLabelClick = this.moreLabelClick.bind(this)
        this.cancelType = this.cancelType.bind(this)
        this.clickplay = this.clickplay.bind(this)
        this.ShfitSomePic = this.ShfitSomePic.bind(this)
    }
    render () {
        var setUp = this.state.setUp

        return (
            <FooterUI
                { ...this.props }
                imgs ={ this.imgs }
                setUp = {setUp}
                setUpClick = {this.setUpClick}
                stopClick = {this.stopClick}
                labelClick = {this.labelClick}
                moreLabelClick = {this.moreLabelClick}
                cancelType = {this.cancelType}
                clickplay = { this.clickplay }
                ShfitSomePic = { this.ShfitSomePic }
            ></FooterUI>
        )
    }

    setUpClick (e) {
        this.setState({
            setUp: ('active' === e.currentTarget.dataset.id ? '' : 'active')
        })
    }

    stopClick (e) {
        e.stopPropagation()
    }

    //单选按钮
    labelClick (e) {
        if (e.target.className === 'radio iconfont') {
            var a = document.querySelectorAll('.radio')
            a.forEach((item) => {
                item.setAttribute('class', 'radio iconfont')
            })
            e.target.className = 'radio iconfont icon-check-circle'
        } else {
            e.target.className = 'radio iconfont'
        }
    }

    //多选按钮
    moreLabelClick (e) {
        // console.log(e.target.className)
        if (e.target.className === 'iconfont') {
            e.target.className = 'iconfont icon-check-circle'
        } else {
            e.target.className = 'iconfont'
        }
    }

    //取消录音
    cancelType () {
        this.props.amendVoice('')
    }

    //点击播放
    clickplay () {
        var that = this
        window.wx.ready(function () {
            window.wx.downloadVoice({
                serverId: that.props.voice, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    that.localId = res.localId; // 返回音频的本地ID
                }
            });
            window.wx.playVoice({
                localId: that.localId // 需要播放的音频的本地ID，由stopRecord接口获得
            });
        }) 
    }

    //取消某一个图片
    ShfitSomePic (index) {
        console.log(index)
        console.log(this.props.serverid)
        var serveridLocal = this.props.serverid
        serveridLocal.splice(index,1)
        this.props.amendServerid(serveridLocal)
        console.log(this.props.serverid)

        var imgLocal = this.props.img
        imgLocal.splice(index,1)
        this.props.amendImg(imgLocal)

        //强制刷新页面
        this.forceUpdate()
    }

    componentDidMount () {
        fetch('http://red-mi.xyz/jsapi')
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          window.wx.config({
            debug: true,                  // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            // appId: result.appId,          // 必填，公众号的唯一标识
            // timestamp: result.timestamp,  // 必填，生成签名的时间戳
            // nonceStr: result.nonceStr,    // 必填，生成签名的随机串
            // signature: result.signature,  // 必填，签名
            appId: 'wxa2c9a8765b5b419d',          // 必填，公众号的唯一标识
            timestamp:1565503778,  // 必填，生成签名的时间戳
            nonceStr: "QaTs3oVc2gue3aRs",    // 必填，生成签名的随机串
            signature: "f21c1a8bee84746875080a63d32c0fed3e793b61",  // 必填，签名
            jsApiList: [
              "scanQRCode",               //扫一扫接口
              "chooseImage",              //拍照或从手机相册中选图接口
              'startRecord',              //开始录音接口
              'stopRecord',               //停止录音接口
              'onVoiceRecordEnd',         //监听录音自动停止接口
              'playVoice',                //播放语音接口
              'stopVoice',                //停止播放接口
              'uploadVoice',              //上传语音接口
              'downloadVoice',            //下载语音接口
              'uploadImage',              //上传图片接口
              'downloadImage',            //下载图片功能
            ]
          })
        })

    }
}

export default connect(mapStateToprops, mapDispatchToProps)(FooterContainer)