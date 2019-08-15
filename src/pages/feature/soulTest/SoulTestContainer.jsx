import React, { Component } from 'react'

import { BackTitleHead } from 'components/index'

import TestContentContainer from './views/TestContentContainer'

/**
 * 灵魂测试容器承载组件
 * 
 * 2019-08-06
 */

export default class SoulTestContainer extends Component {

    // 返回按钮回调函数
    callbackBack(){
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                {/* 头部组件 */}
                <BackTitleHead isClick={this.callbackBack.bind(this)} title="测试"></BackTitleHead>
                {/* 测试列表承载组件 */}
                <TestContentContainer></TestContentContainer>
            </>
        )
    }
}
