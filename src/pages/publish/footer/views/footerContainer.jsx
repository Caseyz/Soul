import React, { Component } from 'react'

import { connect } from 'react-redux'

import FooterUI from './footerUI'

import { voice, img, localid } from '../../actionCreator'

const mapStateToprops = state => {
    return {
        voice: state.getIn(['publish', 'voice']),
        img: state.getIn(['publish', 'img']),
        localid: state.getIn(['publish', 'localid']),
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
        amendLocalId (data) {
            dispatch(localid(data))
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

    //让事件只发生在该元素上，子元素不发生
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
            
            //下载音频
            window.wx.downloadVoice({
                serverId: that.props.voice, 
                isShowProgressTips: 1, 
                success: function (res) {
                    that.localId = res.localId; 
                }
            });

            //播放音频
            window.wx.playVoice({
                localId: that.localId 
            });
        }) 
    }

    //取消某一个图片
    ShfitSomePic (index) {
        //修改本地图片
        var localid = this.props.localid
        localid.splice(index,1)
        this.props.amendLocalId(localid)

        //修改服务器图片
        var imgLocal = this.props.img
        imgLocal.splice(index,1)
        this.props.amendImg(imgLocal)
        
        //强制刷新页面
        this.forceUpdate()
    }

}

export default connect(mapStateToprops, mapDispatchToProps)(FooterContainer)