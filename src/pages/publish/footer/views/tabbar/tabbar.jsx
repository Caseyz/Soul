import React from 'react'

import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile';

//标签图片
import voiceSelect from 'assets/images/publish/录音@3x.png'
import voice from 'assets/images/publish/录音 拷贝@3x.png'
import picture from 'assets/images/publish/相册@3x.png'
import pictureSelect from 'assets/images/publish/相册 拷贝@3x.png'
import tackPicture from 'assets/images/publish/相机 (1)@3x.png'
import emoticon from 'assets/images/publish/表情 (2)@3x.png'
import emoticonSelect from 'assets/images/publish/键盘 (2)@3x.png'

//样式
import './tabbarStyle.css'

//子组件
import Voice from './TBPlugIn/voice/'
import Emotion from 'components/emoji/EmojiMart.jsx'



import { img } from '../../../actionCreator'


const mapState = state => ({
  focus: state.getIn(['publish', 'focus']),
  voice: state.getIn(['publish', 'voice']),
  img: state.getIn(['publish', 'img']),
})

const mapDispatch = dispatch => ({
  GetImages (data) {
    dispatch(img(data))
  }
})

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };

    this.localIds = []
  }

  render () {

    var height = this.props.focus ? 234 : 50
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: height, width: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
          <TabBar.Item
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url("${voice}") center center /  14px 19px no-repeat`
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${voiceSelect}) center center /  14px 19px no-repeat`
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });

            }}
            data-seed="logId"
          >
            {
              this.props.img == ''
                ? <Voice></Voice>
                : <div style={{ 'width': '100%', 'height': '100%', 'textAlign': "center", lineHeight: '180px' }}>只能上传一种格式的资源哟^_^</div>
            }
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${picture}) center center /  20px 19px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${pictureSelect}) center center /  20px 19px no-repeat`
              }}
              />
            }
            key="picture"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });

              if(this.props.voice == ''){
                var that = this
                window.wx.ready(function () {
  
                  //选择图片
                  window.wx.chooseImage({
                    count: 4, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                      that.localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
  
                      //上传图片
                      that.serverId = []
  
                      that.localIds.forEach( Item => {
                        window.wx.uploadImage({
                          localId: Item, // 需要上传的图片的本地ID，由chooseImage接口获得
                          isShowProgressTips: 1, // 默认为1，显示进度提示
                          success: function (res) {
                            var serverId = res.serverId; // 返回图片的服务器端ID
                            that.serverId.push(serverId)
                          }
                        });
                      })
                      that.props.GetImages(that.serverId)
                    }
                  });
                })
              }
        
            }}
            data-seed="logId1"
          >
            <div>{this.props.img}</div>
            {/* {
              this.props.voice === ''
                ? <div className='Images' style={{ 'width': '100%', 'height': '100%', 'textAlign': "center", lineHeight: '180px' }}>只能上传一种格式的资源哟^_^</div>
                : <div className='Images' style={{ 'width': '100%', 'height': '100%', 'textAlign': "center", lineHeight: '180px' }}>请选择图片资源哟^_^</div>
            } */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tackPicture}) center center /  21px 21px no-repeat`
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${tackPicture}) center center /  21px 21px no-repeat`
              }}
              />
            }
            key="tackPicture"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }} />
            {/* {this.renderContent('tackPicture')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${emoticon}` }}
            selectedIcon={{ uri: `${emoticonSelect}` }}
            // title="My"
            key="emoticon"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <Emotion></Emotion>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(TabBarExample)
// console.log(localIds)
                    // if(localIds.length <= 1){
                    //     var a = document.createElement('img')
                    //     a.src = localIds
                    //     document.querySelector('#img').append(a)
                    // }else{
                    //     localIds.forEach(pic => {
                    //         var a = document.createElement('img')
                    //         a.src = pic
                    //         document.querySelector('#img').append(a)
                    //     });
                    // }