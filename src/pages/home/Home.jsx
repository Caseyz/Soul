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

/** 
 * 首页主要路由的导航界面组件
 * 
 * 2019-07-22
 * 
*/

export default class Home extends Component {
    render() {
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
                                <img src="" alt="" />
                                <span>星球</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/home/dynamic">
                                <img src={plazaImg} alt="" />
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
                                <img src={chatImg} alt="" />
                                <span>聊天</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/home/mine">
                                <img src="" alt="" />
                                <span>自己</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </StyleHome>
        )
    }
}
