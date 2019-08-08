import React, { Component } from 'react'
import FocusItem from './FocusItem'
import Axios from 'axios'
export default class FocusList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            type: 0 
        }
    }
    render() {
        return (
            <div>{
                this.props.list && this.props.list.length > 0 ?
                    this.props.list.map((item, index) => {
                        return <FocusItem {...item} key={item.id} type={this.props.type == 1 && item.status == 2 ? 2 : this.props.type}></FocusItem>
                    }) : ""
            }
            </div>
        )
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps) {
            return {
                list: nextProps.type == 0 ? nextProps.myFocusList : nextProps.focusMeList,

            }
        }
        return null
    }
}
