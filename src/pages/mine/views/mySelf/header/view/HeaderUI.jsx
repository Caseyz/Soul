import React from 'react'
import { HeaderStyle, From, GoldBorder, FirendsBorder, SettingBorder, FromBorder } from './HeaderStyle'

export default function () {
    return (
        <HeaderStyle className=''>
            <From className='from'>
                <FromBorder hasBorder="true" className="fromborder">
                    <img src={require('assets/images/mine/from.png')} alt=""/>
                    <p>来自麻瓜星球</p>
                </FromBorder>
            </From>
            <GoldBorder hasBorder="true" className='gold'>
                <img src={require('assets/images/mine/gold.png')} alt=""/>
                <p>6</p>
            </GoldBorder>
            <FirendsBorder hasBorder="true" className='firends'>
            <img src={require('assets/images/mine/firend.png')} alt=""/>
                <p>加好友</p>
            </FirendsBorder>
            <SettingBorder hasBorder="true" className='setting'>
                <img src={require('assets/images/mine/setting.png')} alt=""/>
            </SettingBorder>
        </HeaderStyle>
    )
}