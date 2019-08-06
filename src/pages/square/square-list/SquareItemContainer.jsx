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
            list: []
        }
        // this.result = []
    }
    async componentDidMount(){
        let focus = '',
            time = ''
        switch(this.props.tabNumber){
            case 0 :
                focus = 'focus'
                time = 'desc'
                break
            case 1 :
                focus = ''
                time = ''
                break
            case 2 :
                focus = ''
                time = 'desc'
                break
        }
        let result = await http.post('/alldynamic',{
            "focus": focus,
            "time": time,
            "pagenum":1,
            "pagesize":10
        })
        this.setState({list: result})

    }
    render() {
        console.log(this.state.list)
        let list = this.state.list instanceof Array 
        ? this.state.list.map((item,index)=>(
                <SquareItemUI key={item.id} info={item} tabNumber = {this.props.tabNumber}></SquareItemUI>
          )) 
        : []
        return (
        <StyleSquareItemContainer>
            {this.props.hasSearch ? <SearchBar /> : ''}
            {/* <SquareItemUI></SquareItemUI> */}
            {list}
        </StyleSquareItemContainer>
        )
    }
}

export default SquareItemContainer
