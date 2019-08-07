import React, { Component } from 'react'
import StyledFocusHeader from './StyledFocusHeader'

export default class FocusHeader extends Component {
    render() {
        return (
            <StyledFocusHeader>
                <i>&lt;</i>
                <div><span>关注列表</span></div>
            </StyledFocusHeader>
        )
    }
}
