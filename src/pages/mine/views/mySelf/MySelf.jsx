import React, { Component } from 'react';

import { Mine } from './MySelfStyle'
import { TopMsg } from './topMsg/'
import { Bottom as BottomMsg } from './bottomMsg'

class MySelf extends Component {
    render() {
        return (
            <Mine>
                <TopMsg scaleHegiht={this.props.scaleHegiht > 0 ? this.props.scaleHegiht : 0}></TopMsg>
                <BottomMsg ></BottomMsg>
            </Mine>
        );
    }
}

export default MySelf;