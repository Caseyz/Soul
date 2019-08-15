import React, { Component } from 'react'
// import { ActionSheet } from 'antd-mobile'

import { connect } from 'react-redux'

import { List } from 'immutable'

import { getPlanetDataAsync } from './store/actionCreator'

import StylePlanetContainer from './StylePlanetContainer'

import PlaneHead from './views/PlaneHead'

import PlaneUI from './views/PlaneUI'


/** 
 * 首页中星球界面的显示组件容器
 * 
 * 2019-07-22
*/

// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//     wrapProps = {
//         onTouchStart: e => e.preventDefault(),
//     };
// }

const mapStateToProps = state => ({
    planetData: state.getIn(['planet', 'userMsg'])
})

const mapDispatchToProps = dispatch => ({
    getUser() {
        dispatch(getPlanetDataAsync())
    }
})

class PlanetContainer extends Component {
    constructor(props) {
        super(props);
        // 筛选中的数据应用
        this.state = {
            filter: {
                sex: [
                    {
                        isClick: true,
                        value: "男"
                    },
                    {
                        isClick: false,
                        value: "不限"
                    },
                    {
                        isClick: false,
                        value: "女"
                    }],
                age: [12, 50],
                constellation: [
                    {
                        isClick: true,
                        value: "全部星座"
                    },
                    {
                        isClick: false,
                        value: "自定义星座"
                    },
                ]
            },
            // 是否点击筛选
            isClickFilterValue: true,
            // 年龄选择数据
            ageData: {
                changeAge: [12, 50]
            },
            planetData: List([])
        }
    }

    componentDidMount() {
        this.props.getUser()
    }

    // 点击头部的回调
    soulText(clickBtn) {
        this.props.history.push(clickBtn)
    }

    // 点击选项卡的路由跳转回调
    isClickCart(routePath) {
        this.props.history.push(routePath)
    }

    // 筛选中点击后改变的数据
    getFilterData(keyType, keyItem, e) {
        e.stopPropagation()
        let newData = this.state.filter[keyType].forEach(value => {
            value.isClick = value.value === keyItem ? true : false;
        })

        this.setState((preState, props) => ({
            sex: preState.sex,
            age: preState.age,
            constellation: preState.constellation,
            [keyType]: newData
        }))
    }

    //判定是否进行筛选
    isClickFilter() {
        this.setState((preState, props) => ({
            isClickFilterValue: !preState.isClickFilterValue
        }))
    }

    // 取消冒泡
    stop(e) {
        e.stopPropagation()
    }

    // 年龄选着事件
    log = (name) => {
        return (value) => {
            let _ageArr = value
            this.setState((preState, props) => ({
                ageData: {
                    changeAge: _ageArr
                }
            }))
        }
    }

    // 确认按钮
    submitHandle(e) {
        e.stopPropagation()
        this.setState((preState, props) => ({
            isClickFilterValue: !preState.isClickFilterValue
        }))
    }

    // 点击空白隐藏
    isHidden() {
        this.setState((preState, props) => ({
            isClickFilterValue: !preState.isClickFilterValue
        }))
    }

    render() {
        return (
            <StylePlanetContainer>
                {/* 星球界面头组件 */}
                <PlaneHead callbackClick={this.soulText.bind(this)} isClick={this.showActionSheet} {...this.state.filter} getFilterData={this.getFilterData.bind(this)} isClickFilter={this.isClickFilter.bind(this)}
                    log={this.log}
                    {...this.state.ageData}
                    isClickFilterValue={this.state.isClickFilterValue}
                    submitHandle={this.submitHandle.bind(this)}
                    isHidden={this.isHidden.bind(this)}
                    stop={this.stop.bind(this)}></PlaneHead>
                {/* 星球界面旋转球界面 */}
                {console.log(this.props.planetData.toJS())}
                <PlaneUI isClickCart={this.isClickCart.bind(this)}
                    options={{
                        callback: () => { alert(1)},
                        data: this.props.planetData.toJS()
                        }
                    }
                ></PlaneUI>
            </StylePlanetContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer)
