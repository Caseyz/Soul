import React, { Component } from 'react'

import SquareItemUI from './SquareItemUI'

import StyleSquareItemContainer from './StyleSquareItemContainer'

//搜索框组件导入
import SearchBar from 'components/search/SearchBar.jsx'


import http from 'utils/http'

export class SquareItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            picNumber:1,
            list: [],
        }
        this.showText = this.showText.bind(this)
        this.arrowStatus = false
        // this.arrow=React.createRef();
    }

    //显示
    showText(textEl,arrowEl){
        let show  = false
        let that = this
        return function(){
            show = !show
            that.arrowStatus = !that.arrowStatus
            if(show){
                textEl.classList.remove('text-container')
                textEl.style.overFlow = "visible"
            }else{
                textEl.classList.add('text-container')
                textEl.style.overFlow = "hidden"
            }
        }
    }

    addLike(pre){
        return ()=>{
            console.log(pre)
        }
    }

    render() {
        let list = this.props.squareData
        ? this.props.squareData.list.map((item,index)=>(
                <SquareItemUI key={item.id} arrowStatus={this.arrowStatus}  addLike={this.addLike} showText={this.showText} info={item} tabNumber = {this.props.tabNumber}></SquareItemUI>
          )) 
        : []
        return (
        <StyleSquareItemContainer>
            {this.props.tabNumber===1 ? <SearchBar /> : ''}
            {list}
        </StyleSquareItemContainer>
        )
    }
}

export default SquareItemContainer
