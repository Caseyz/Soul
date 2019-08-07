import React, { Component } from 'react'
import StyledFocusItem from './StyledFocusItem'
export default class FocusItem extends Component {
    render() {
        return (
            <StyledFocusItem>
                <div className="left">
                    <img src="http://via.placeholder.com/40px*40px" alt=""/>
                    <div>
                        <h4>{this.props.userName}</h4>
                        <span>37天，121瞬间</span>
                    </div>
                </div>
                <div className="right">
                    <i></i>
                    <span>取消关注</span>
                </div>

            </StyledFocusItem>
        )
    }
}
