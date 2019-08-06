import React from 'react'

import { connect } from 'react-redux'

import { TabBar } from 'antd-mobile';
import voiceSelect from 'assets/images/publish/录音@3x.png'
import voice from 'assets/images/publish/录音 拷贝@3x.png'
import picture from 'assets/images/publish/相册@3x.png'
import pictureSelect from 'assets/images/publish/相册 拷贝@3x.png'
import tackPicture from 'assets/images/publish/相机 (1)@3x.png'
import emoticon from 'assets/images/publish/表情 (2)@3x.png'
import emoticonSelect from 'assets/images/publish/键盘 (2)@3x.png'

import './tabbarStyle.css' 

import Voice from './TBPlugIn/voice/'

const mapState = state => ({
  focus: state.getIn(['publish', 'focus']),
})

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
        
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
        </a>
      </div>
    );
  }

  render() {
    console.log(this.props)
    var height =  this.props.focus ? 234 : 50
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height:height }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
          <TabBar.Item
            // title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url("${voice}") center center /  .14rem .19rem no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${voiceSelect}) center center /  .14rem .19rem no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
              
            }}
            data-seed="logId"
          >
            <Voice></Voice> 
            {/* {this.renderContent('Life')} */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ picture }) center center /  .20rem .19rem no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ pictureSelect }) center center /  .20rem .19rem no-repeat` }}
              />
            }
            // title="picture"
            key="picture"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('picture')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ tackPicture }) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${ tackPicture }) center center /  21px 21px no-repeat` }}
              />
            }
            // title=""
            key="tackPicture"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('tackPicture')}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: `${ emoticon }` }}
            selectedIcon={{ uri: `${ emoticonSelect }` }}
            // title="My"
            key="emoticon"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
              console.log(1)
            }}
          >
            {this.renderContent('emoticon')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default connect(mapState)(TabBarExample)