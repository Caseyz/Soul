import React, { Component } from 'react'

import MainUI from './mainUI'
class MainContainer extends Component {
    
    constructor() {
        super()
        this.state = {
            value: ''
        }
        this.inputRef = React.createRef();
    }

    render () {
        return (
            <MainUI focus={this.inputRef} value={this.state.value} valueChange={this.valueChange.bind(this)}></MainUI>
        )
    }

    valueChange (e) {
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }
}

export default MainContainer