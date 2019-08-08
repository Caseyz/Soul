import React, { Component } from 'react'
import SearchFunction from './SearchFunction.jsx'

import StyleSquareSearch from "./StyleSquareSearch"

import searchPic from 'assets/images/search/button.png'


const parameter = {
    height: '.20rem',
    width: '2.97rem',
    searchPic: searchPic,
    placeHolder: '美食',
    cancelButton: '取消',
    paddingTop: '.49rem'
  }


export default class SearchContainer extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.Alert = this.Alert.bind(this);
    }

    Alert(data){
        alert(data)
    }

    render() {
        return (
            <StyleSquareSearch>
                <SearchFunction searchStyle={parameter} methods={this.Alert}></SearchFunction>
            </StyleSquareSearch>
        )
    }
}
