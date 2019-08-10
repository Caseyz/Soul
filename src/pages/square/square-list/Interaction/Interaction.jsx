import React, { Component } from 'react'

export default class Interaction extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let info = this.props.props.info
        let addLike = this.props.props.addLike
        let index = this.props.props.index
        return (
            <div className="Interaction">
                <i className="like" onClick={addLike.bind(null,info.id,index)}></i><span>{info.star}</span>
                <i className="comment"></i><span>{info.comments}</span>
                <i className="collection"></i>
            </div>
        )
    }
}
