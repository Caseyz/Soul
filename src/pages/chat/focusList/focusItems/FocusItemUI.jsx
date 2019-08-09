import React, { Component } from 'react'
import BorderedFocusItem from './StyledFocusItem'
import BtnFocus from './BtnFocus.js'
export default class FocusItem extends Component {
    render() {
        return (
            <BorderedFocusItem hasBorder={true}>
                <div className="left">
                    <img src="http://via.placeholder.com/40px*40px" alt=""/>
                    <div>
                        <h4>{this.props.data.username}</h4>
                        <span>37天，121瞬间</span>
                    </div>
                </div>
                <div className="right">
                    <BtnFocus type={this.props.type} onClick={this.handleClick.bind(this,this.props.type,this.props.data.id)}>
                    {this.props.content}
                    </BtnFocus>
                </div>

            </BorderedFocusItem>
        )
    }
    handleClick(type,id){
        this.props.btnClick(type,id)
    }
}
