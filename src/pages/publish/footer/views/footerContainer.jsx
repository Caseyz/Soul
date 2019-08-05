import React, { Component } from 'react'

import FooterUI from './footerUI'

class FooterContainer extends Component {
    constructor() {
        super()
        this.state = {
            setUp : 'active' 
        }

        this.setUpClick = this.setUpClick.bind(this)
        this.stopClick = this.stopClick.bind(this)
        this.labelClick = this.labelClick.bind(this)
        this.moreLabelClick = this.moreLabelClick.bind(this)
    }
    render () {
        var setUp = this.state.setUp
        return (
            <FooterUI 
                setUp = { setUp } 
                setUpClick = { this.setUpClick }
                stopClick = { this.stopClick }
                labelClick = { this.labelClick }
                moreLabelClick = { this.moreLabelClick }
            ></FooterUI>
        )
    }

    setUpClick (e) {
        //e.currentTarget.dataset.id 拿到自定义属性的值
        this.setState({
            setUp : ('active' === e.currentTarget.dataset.id ? '' : 'active' )
        })
    }

    stopClick(e) {
        e.stopPropagation()
    }
    //单选按钮
    labelClick(e){
        // console.log(e.target.className)
        if(e.target.className === 'radio iconfont'){
            // console.log(1)
            var a = document.querySelectorAll('.radio')
            a.forEach((item) => {
                    item.setAttribute('class','radio iconfont')
            })
            e.target.className = 'radio iconfont icon-check-circle'
        }else{
            // console.log(2)
            e.target.className = 'radio iconfont'
        }
    }
    //多选按钮
    moreLabelClick(e){
        // console.log(e.target.className)
        if(e.target.className === 'iconfont'){
            e.target.className = 'iconfont icon-check-circle'
        }else{
            e.target.className = 'iconfont'
        }
    }
}

export default FooterContainer