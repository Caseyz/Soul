import React, { useState, useRef, useEffect } from 'react'
import StyleSquareItemUI from './StyleSquareItemUI'


//文字展开逻辑
// import useShow from './text.jsx'

//图片导入
import headPhoto from 'assets/images/square/7bdc97e546fb59e65584b916021b193addde1d3a10b90-8pifaR_fw658@3x.png'
import publishPic1 from 'assets/images/square/864fcba1be833081097df3936668bd9f@3x.png'
import publishPic2 from 'assets/images/square/ab739ad95e95308c1491f76f4168fe20@3x.png'
import arrowPic from 'assets/images/square/箭头@3x.png'
// import { convertPatternsToTasks } from 'fast-glob/out/managers/tasks';
// export default React.forwardRef((props,ref)=>{
export default (props)=>{

    let [isExceed,setIsExceed] = useState(false)
    const fileInputEl = useRef(null);
    const textEl = useRef(null);
    const arrowEl = useRef(null);
    let elHeight = 0
    let elWidth = 0
    useEffect(()=>{
        elHeight = fileInputEl.current ? fileInputEl.current.offsetHeight : 0
        elWidth = fileInputEl.current ? fileInputEl.current.offsetWidth : 0
        // console.log(elWidth)
        if(elHeight > elWidth*(138/285)){
            setIsExceed(true)
        }else{
            setIsExceed(false)
        }
    })
    return(
        <StyleSquareItemUI>
            <div className="square-user">
                <img className="user-photo" src={headPhoto} alt=""/>
                <div className="user-info">
                    <span className="username">{ props.tabNumber===1 ? props.info.username : '来自 # '+ props.info.starname}</span>
                    <span className="publish-time">2小时前</span>
                </div>
            </div>
            <div className="publish-message" ref={arrowEl}>
                <div className="publish-pic"> 
                    <img src={publishPic1} style={{width:'.99rem',height:'1.20rem',paddingRight:'.06rem'}} alt=""/>
                    <img src={publishPic2} style={{width:'.99rem',height:'1.20rem'}} alt=""/>
                </div>
                <h6 className="text-container" ref={textEl}>{props.info.note}春天的味道是蒲公英的味道,是绿色的味道，我妈平时说我笨我家狗就在旁边听着，以至于它真<br />
                    的觉得我笨出花了<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    hiehei<br />
                    hiehei<br />
                </h6>
                <h6 className="text-container-measure" ref={fileInputEl}>{props.info.note}春天的味道是蒲公英的味道,是绿色的味道，我妈平时说我笨我家狗就在旁边听着，以至于它真<br />
                    的觉得我笨出花了<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    哈哈哈哈<br />
                    hiehei<br />
                    hiehei<br />
                </h6>
                {isExceed && <p onClick={props.showText(textEl.current,arrowEl.current)}><img src={arrowPic} alt=""/></p>}
                {props.info.address && <div className="publish-position">
                    <i className="position-pic"></i><span>{props.info.address}</span>
                </div>}
                <div className="Interaction">
                    <i className="like"></i><span>{props.info.star}</span>
                    <i className="comment"></i><span>{props.info.comments}</span>
                    <i className="collection"></i>
                </div>
            </div>
        </StyleSquareItemUI>
    )
}
