import React, { Component } from 'react'
import HeaderContainer from './square-header/HeaderContainer'
import SquareItemContainer from './square-list/SquareItemContainer'

export default class Square extends Component {
    render() {
        return (
            <div>
                <HeaderContainer></HeaderContainer>
                <SquareItemContainer></SquareItemContainer>
                <div class="dibu">底部</div>
            </div>
        )
    }
}
