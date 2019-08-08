import React, {Component} from 'react'
import BScroll from 'better-scroll'
import http from 'utils/http'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

class Scroll extends Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }

    async getSquareDate(pagenum,pagesize){
        let focus = '',
            time = ''
        switch(this.props.tabNumber){
            case 0 :
                focus = 'focus'
                time = 'desc'
                break
            case 1 :
                focus = ''
                time = ''
                break
            case 2 :
                focus = ''
                time = 'desc'
                break
        }
        let result = await http.post('/alldynamic',{
            "focus": focus,
            "time": time,
            "pagenum":pagenum,
            "pagesize":pagesize
        })

        return result
    }


    async componentDidMount(){
        Toast.loading('Loading...',1)
        let pagenum = 1
        let result = await this.getSquareDate(pagenum,5)
        Toast.hide()
        this.setState({list: [...this.state.list,...result]})

        let bScroll = new BScroll(this.props.fatherSe,{
            scrollY: true,
            click: true,
            pullUpLoad: true,
        })

        bScroll.on('pullingUp',async ()=>{
            pagenum++
            Toast.loading('Loading...',30)
            let result = await this.getSquareDate(pagenum,5)
            if(!result.length){
                console.log(1)
                Toast.offline('没有更多内容了',2)
                bScroll.finishPullUp()
                return 0
            }
            this.setState({list: [...this.state.list,...result]})
            Toast.hide()
            bScroll.finishPullUp()
            bScroll.refresh()
        })

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
