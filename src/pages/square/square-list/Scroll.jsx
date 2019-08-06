import React, {Component} from 'react'
import BScroll from 'better-scroll'

class Scroll extends Component {
    constructor(props){
        super(props)
        this.state = {
            a:1,b:2
        }
    }
    componentDidMount(){
        let scroll = new BScroll(this.props.fatherSe,{
            scrollY: true,
            click: true,
            pullUpLoad: true,
            threshold: 0,
            stop: 40
        })

        scroll.finishPullDown()
        setTimeout(()=>{
            console.log(111111111111)
            scroll.refresh()
        },1000)
    }

    render(){
        return(
            <>
                {this.props.render(this.state)}
            </>
        )
    }
}

export default Scroll
