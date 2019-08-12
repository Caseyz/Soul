import React, { Component } from 'react';
import { withRouter } from 'react-router-dom' 

import { Item } from './SettingItemStyle'

class SettingItem extends Component {
    render() {
        return (
            <>
                {
                    this.props.SetItem && this.props.SetItem.map(item => {
                        return <Item key={item.name} onClick={this.handleClick.bind(this,item)}>
                            <div className="iconType">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="signature">
                                <span>
                                    {item.name}
                                </span>
                            </div>
                            <div className="jiantou">
                                <img src={require('assets/images/mine/jiantou.png')} alt="" />
                            </div>
                        </Item>
                    })
                }
            </>
        );
    }
    handleClick(item) {
        if(item.name === '更改个性签名'){
            this.props.history.push('/mine/setting/signature')
        }
        if(item.name === '更改生日'){
            this.props.history.push('/mine/setting/birthday')
        }
        if(item.name === '修改密码'){
            this.props.history.push('/mine/setting/password')
        }


    }
}

export default withRouter(SettingItem);