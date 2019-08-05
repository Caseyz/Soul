import React, { Component } from 'react';
import { ItemStyle } from './ItemStyle'
import ItemUI from './ItemUI'

class Item extends Component {
    render() {
        return (
            <ItemStyle>
                <ItemUI></ItemUI>
            </ItemStyle>
        );
    }
}

export default Item;