import styled from 'styled-components'

let Footer = styled.div`
    /* height:3.32rem; */
    width:100%;
    padding:0 .2rem;
    background: #fff;
`

let FooterTop = styled.div`
    height:.24rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .position{
        display:flex;
        align-items:center;
        >i{
            width:.19rem;
            height:.23rem;
            background: #000;
            display: inline-block;
        }
        >span{
            color:#57E1E2;
            font-size:.12rem;
            padding-left:.06rem;
        }
    }
    .setUp{
        display:flex;
        align-items:center;
        position:relative;
        span{
            color:#5D5D5D;
            font-size:.12rem;
        }
        i.active{
            width:.06rem;
            height:.06rem;
            display: inline-block;
            margin-left:.06rem;
            border-bottom:1px solid #666;
            border-left:1px solid #666;
            transform:rotate(-45deg);
            margin-top:-.03rem;
            transition:all .5s ;
        }
        i{
            width:.06rem;
            height:.06rem;
            display: inline-block;
            margin-left:.06rem;
            border-bottom:1px solid #666;
            border-left:1px solid #666;
            transform:rotate(135deg);
            margin-top:.03rem;
            transition:all .5s ;
        }
        .ckeckout {
            width: 2.78rem;
            height: 1.58rem;
            background: rgba(0, 0, 0, .7);
            position: absolute;
            bottom: .35rem;
            right: .04rem;
            border-radius: .08rem;
        }
        .sanjiao {
            width:0 ;
            height:0;
            border:.08rem solid transparent;
            border-top-color: rgba(0, 0, 0, .7);
            position: absolute;
            bottom: -.16rem;
            right:.15rem;
        }
       
    }
`
// 0.324
export {
    Footer,
    FooterTop
}