import React from 'react'
import StyleSquareItemUI from './StyleSquareItemUI'

//图片导入
import headPhoto from 'assets/images/square/7bdc97e546fb59e65584b916021b193addde1d3a10b90-8pifaR_fw658@3x.png'
import publishPic1 from 'assets/images/square/864fcba1be833081097df3936668bd9f@3x.png'
import publishPic2 from 'assets/images/square/ab739ad95e95308c1491f76f4168fe20@3x.png'
export default (props)=>{
    return(
        <StyleSquareItemUI>
            <div className="square-user">
                <img className="user-photo" src={headPhoto} alt=""/>
                <div className="user-info">
                    <span className="username">杨森森</span>
                    <span className="publish-time">2小时前</span>
                </div>
            </div>
            <div className="publish-message">
                <div className="publish-pic"> 
                    <img src={publishPic1} style={{width:'.99rem',height:'1.20rem',paddingRight:'.06rem'}} alt=""/>
                    <img src={publishPic2} style={{width:'.99rem',height:'1.20rem'}} alt=""/>
                </div>
                <h6>春天的味道是蒲公英的味道,是绿色的味道，我妈平时说我笨我家狗就在旁边听着，以至于它真的觉得我笨出花了</h6>
                <div className="publish-position">
                    <i className="position-pic"></i><span>北京市</span>
                </div>
                <div className="Interaction">
                    <i className="like"></i><span>6</span>
                    <i className="comment"></i><span>2</span>
                    <i className="collection"></i>
                </div>
            </div>
        </StyleSquareItemUI>
    )
}

