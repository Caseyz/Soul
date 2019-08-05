import React,{Component} from 'react'
import { Tabs, Badge } from "antd-mobile"

import SquareItemContainer from './square-list/SquareItemContainer'

//导入图片
import camerPic from '../../assets/images/square/照相机@3x.png'
import signInPic from '../../assets/images/square/签到@3x.png'

import './cover.css'
const tabs = [
  { title: <Badge>关注</Badge> },
  { title: <Badge>推荐</Badge> },
  { title: <Badge>更新</Badge> },
]

// const TabExample = () => (
class TabExample extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  componentDidMount(){
  this.ttt = document.querySelector('.am-tabs-tab-bar-wrap')
  }

  render(){
    let mel = document.querySelectorAll('.am-badge')
    return(
      <div style={{height:'100%'}}>
      <Tabs tabs={tabs}
        initialPage={1}
        tabBarActiveTextColor="#333"
        onChange={
          (tab,index) => {
            mel.forEach((val,index)=>{mel[index].style.fontWeight="400";mel[index].style.fontSize=".15rem";})
            mel[index].style.fontWeight = "600"
            mel[index].style.fontSize = ".18rem"
            index !==1 ? this.ttt.classList.add('addone') : this.ttt.classList.remove('addone')
        } }
        // onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{flex:1, backgroundColor: '#fff' }}>
          <SquareItemContainer></SquareItemContainer> 
        </div>
        <div style={{flex:1, backgroundColor: '#fff' }}>
          <SquareItemContainer hasSearch="true"></SquareItemContainer> 
        </div>
        <div style={{flex:1, backgroundColor: '#fff' }}>
          <SquareItemContainer></SquareItemContainer> 
        </div>
      </Tabs>
  
      <div className="extends">
          <span className="square-camera"><img src={camerPic} alt="camera"/></span>
          <span className="square-signin"><img src={signInPic} alt="sign in"/></span>
      </div>
  
    </div>
    )
  }
}
// )

export default TabExample
