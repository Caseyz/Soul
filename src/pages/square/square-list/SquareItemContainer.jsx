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
            picNumber:1
        }
    }
    async componentDidMount(){
        // let result = await http.post('/alldynamic',JSON.stringify({
        //     "focus":"",
        //     "time":"",
        //     "pagenum":1,
        //     "pagesize":10
        // }))
        // console.log(result)
    }
    render() {
        return (
        <StyleSquareItemContainer>
            {this.props.hasSearch ? <SearchBar /> : ''}
            <SquareItemUI></SquareItemUI>
            <SquareItemUI></SquareItemUI>
            <SquareItemUI></SquareItemUI>
            <SquareItemUI></SquareItemUI>
        </StyleSquareItemContainer>
        )
    }
}

export default SquareItemContainer
