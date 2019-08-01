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
    }
    render () {
        var setUp = this.state.setUp
        return (
            <FooterUI 
                setUp = { setUp } 
                setUpClick = { this.setUpClick }
                stopClick = { this.stopClick }
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
}

export default FooterContainer