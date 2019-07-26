import React, { Component } from 'react';

import 'emoji-mart/css/emoji-mart.css'

import { Picker } from 'emoji-mart'

import { Emoji } from './styleEmoji'

class EmojiMart extends Component {
    constructor(props){
        super(props)
        this.state = {
            emoji : ""
        }
    }
    render() {
        return (
            <Emoji>
                <Picker
                //父组件定义state，属性style: {} 传表情样式
                    style={this.props.style}            
                    set='apple'
                    showPreview={false}
                    showSkinTones={false}
                    defaultSkin={2}
                    onClick={this.handleClick}
                />
            </Emoji>
        );
    }
    //点击标签存储当前表情对应信息
    handleClick =(emoji,props)=>{
        console.log(emoji)
        this.setState({
            emoji : emoji,
        })
        console.log(this.props)
        this.props.handle(emoji)
    }
}

EmojiMart.propTypes = {

};

export default EmojiMart;

