import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import PlanetContainer from './planet/PlanetContainer'
import PlazaContainer from './plaza/PlazaContainer'
import MineContainer from './mine/MineContainer'
import ChatContainer from './chat/ChatContainer'
import PublishContainer from './publish/PublishContainer'
import StyleHome from './StyleHome'

import plazaImg from 'assets/images/home/guangchang3x.png'
import chatImg from 'assets/images/home/liaotian3x.png'
import planetImg from 'assets/images/home/planet@3x.png'
import mineImg from 'assets/images/home/mine@3x.png'

import planetedImg from 'assets/images/home/planeted.png'
import plazaedImg from 'assets/images/home/plazaed@3x.png'
import chatedImg from 'assets/images/home/chated.png'
import minedImg from 'assets/images/home/mined.png'

/** 
 * 首页主要路由的导航界面组件
 * 
 * 2019-07-22
 * 
*/

export default class Home extends Component {
  
    render() {
        const routePath = this.props.location.pathname
        return (
            <StyleHome>
                <main>
                    {/* 星球组件 */}
                    <Route path='/home' exact render={ (props)=><PlanetContainer {...props}></PlanetContainer> } />
                    {/* 广场组件 */}
                    <Route path='/home/dynamic' render={(props)=><PlazaContainer {...props}></PlazaContainer> }/>
                    {/* 发布组件 */}
                    <Route path='/home/publish' render={(props)=><PublishContainer {...props}></PublishContainer> } />
                    {/* 聊天组件 */}
                    <Route path='/home/chat' render={(props)=><ChatContainer {...props}></ChatContainer> } />
                    {/* 我的组件 */}
                    <Route path='/home/mine' render={(props)=><MineContainer {...props}></MineContainer> } />
                </main>

                <nav>
                    <ul>
                        <li>
                            <Link className="link" to="/home">
                                <img src={routePath==='/home' ? planetedImg : planetImg} alt="" className="planet-img"/>
                                <span>星球</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/home/dynamic">
                                {console.log(routePath)}
                                <img src={routePath==='/home/dynamic' ? plazaedImg : plazaImg} alt="" />
                                <span>广场</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/publish">
                                <div className="ball">
                                    <span>发布</span>
                                </div>
                                <div className="top-ball"></div>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/home/chat">
                                <img src={routePath==='/home/chat' ? chatedImg : chatImg} alt="" />
                                <span>聊天</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/home/mine">
                                <img src={routePath==='/home/mine' ? minedImg : mineImg} alt="" />
                                <span>自己</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </StyleHome>
        )
    }
}
