import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import styled from 'styled-components'

const StyleSearch = styled.div`
display: flex;
justify-content: space-between;
padding-top: ${(props)=>{return props.parameter.paddingTop ? props.parameter.paddingTop : 0}};
.search-container{
        width: ${(props)=>{return props.parameter.width ? props.parameter.width : '3.55rem'}};
        height: ${(props)=>{return props.parameter.height ? props.parameter.height : '.20rem'}};
        background: ${(props)=>{return props.parameter.background ? props.parameter.background : '#F5F6F7'}};
        border-radius: ${(props)=>{return props.parameter.borderRadius ? props.parameter.borderRadius : '.1rem'}};
        padding-left: ${(props)=>{return props.parameter.paddingLeft ? props.parameter.paddingLeft : '.15rem'}};
        border: ${(props)=>{return props.parameter.border ? props.parameter.border : 'none'}};
        input{
            border: none;
            background: transparent;
            padding-left: .12rem;
        }
        input::placeholder{
            font-size: .15rem;
            color: #333;
        }
        i{
            display: inline-block;
            width: .11rem;
            height: .11rem;
            background: url( ${(props)=>{return props.parameter.searchPic ? props.parameter.searchPic : 'none'}} ) no-repeat;
            background-size: 100%;
        }
    }
    .cancelButton{
        color: #999;
        font-size: .12rem;
    }
`

class SearchFunction extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({inputValue: event.target.value});
      }

    handleSubmit(event) {
        this.props.methods(this.state.inputValue)
        event.preventDefault();
    }

    render() {
        return (
            <StyleSearch parameter={this.props.searchStyle}>
                <div className="search-container">
                    <i onClick={this.handleSubmit}></i><input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder={this.props.searchStyle.placeHolder}/>
                </div>
                {this.props.searchStyle.cancelButton ? <div className="cancelButton"  onClick={()=>{this.props.history.push('/dynamic')}}>取消</div> : ''}
            </StyleSearch>
        )
    }
}

export default withRouter(SearchFunction)

