import React, { Component } from 'react'

import SquareItemUI from './SquareItemUI'

import StyleSquareItemContainer from './StyleSquareItemContainer'

export class SquareItemContainer extends Component {
    render() {
        return (
        <StyleSquareItemContainer>
            <SquareItemUI></SquareItemUI>
        </StyleSquareItemContainer>
        )
    }
}

export default SquareItemContainer
