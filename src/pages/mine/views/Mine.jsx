import React, { Component } from 'react';
import styled from 'styled-components';
import BScroll from 'better-scroll';
import MySelf from './mySelf/MySelf' ;

import {
    Route,
    Redirect
} from 'react-router-dom'

const Scroll = styled.div`
    height: 100%;
    overflow: hidden;
`

class Mine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scaleHegiht : 0 
        }
    }
    render() {
        return (
           <Scroll className="bScroll">
                <MySelf scaleHegiht={this.state.scaleHegiht}></MySelf>
           </Scroll>
        );
    }
    componentDidMount() {
        let bs = new BScroll('.bScroll', {
            scrollY: true,
            click: true,
            probeType: 3
        })
        bs.on('scroll',(e) => this.onScroll(e))
        // bs.on('scrollEnd', this.endScroll.bind(this))
    }
    
    onScroll(e) {
        this.setState({
            scaleHegiht: this.scaleHegiht = e.y
        })
        // console.log(this.scaleHegiht)
    }
    // endScroll(e) {
    //     this.setState({
    //         scaleHegiht: this.scaleHegiht = 0
    //     })
    //     console.log(this.scaleHegiht)
    // }
}



export default Mine