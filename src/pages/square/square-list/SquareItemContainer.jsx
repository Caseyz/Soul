import React, { Component } from 'react'

import http from 'utils/http'

import SquareItemUI from './SquareItemUI'
import StyleSquareItemContainer from './StyleSquareItemContainer'

//搜索框组件导入
import SearchBar from 'components/search/SearchBar.jsx'
//文本箭头图片
import arrowUPic from 'assets/images/square/箭头@3x.png'
import arrowDPic from 'assets/images/square/arrowdown.png'

export class SquareItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            picNumber:1,
            list: [],
        }
        this.showText = this.showText.bind(this)
        this.text = false
        // this.arrow=React.createRef();
    }

    //显示
    showText(textEl, textId, tabNumber, foo){
        let show  = false
        return function(){
            show = !show
            if(show){
                let textArrow = document.querySelector(".textArrow"+textId+tabNumber)
                textArrow.src = arrowDPic
                textEl.classList.remove('text-container')
                textEl.style.overFlow = "visible"
                foo()
            }else{
                let textArrow = document.querySelector(".textArrow"+textId+tabNumber)
                textArrow.src = arrowUPic
                textEl.classList.add('text-container')
                textEl.style.overFlow = "hidden"
                foo()
            }
        }
    }

    addLike(id){
        return function(){
            http.get(
                '/star',
                {id}
                )
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
