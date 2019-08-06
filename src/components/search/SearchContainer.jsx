import React, { Component } from 'react'
import SearchUI from './SearchUI.jsx'

export default class SearchContainer extends Component {
    render() {
        console.log("我是二级路由")
        return (
            <div>
                <SearchUI></SearchUI>
            </div>
        )
    }
}
