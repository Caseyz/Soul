import React from 'react'


import { Footer, FooterTop } from './footer'

const FooterUI = props => {
    return (
        <Footer>
            <FooterTop>
                <div className = "position">
                    <i></i> 
                    <span>北京</span>
                </div>
                <div 
                    className = "setUp" 
                    onClick = { props.setUpClick } 
                    data-id = { props.setUp }
                >
                    <span>设置</span>
                    <i className={ props.setUp }></i>
                    {
                        !props.setUp &&(
                        <div className = 'animated zoomIn ckeckout' onClick = { props.stopClick }>
                            <div className = 'selectTop'>
                                <div className = 'seeRange'>可见范围</div>
                                <div className = 'select'>
                                    <label htmlFor="gckj">广场可见</label>
                                    <input type="radio" name = 'seeRange' id = 'gckj'/>
                                </div>
                                
                            </div>
                            <div className = 'sanjiao'></div>
                        </div>  )
                    }
                </div>
            </FooterTop>
        </Footer>
    )
}

export default FooterUI
