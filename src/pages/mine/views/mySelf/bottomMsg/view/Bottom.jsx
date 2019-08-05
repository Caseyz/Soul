import React, { Component } from 'react';

import { BStyle } from './BStyle'
import Item from '../item/Item'

class Bottom extends Component {
    render() {
        return (
            <BStyle>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </BStyle>
        );
    }
}

export default Bottom;