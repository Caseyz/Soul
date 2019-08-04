import styled from 'styled-components'

const StyleSquareItemUI = styled.div`
padding-top: .2rem;
::after{
    display: block;
    content:'';
    clear: both;
    height:0;
}
.square-user{
    height: .35rem;
    .user-photo{
        width:.35rem;
        height:.35rem;
        float: left;
    }
    .user-info{
        float: left;
        padding-left: .1rem;
        flex-direction: column;
        .username{
            font-size: .15rem;
            line-height: .15rem;
            color: #57E1E2;
            display: block;
            margin-bottom: .05rem;
        }
        .publish-time{
            font-size: .13rem;
            line-height: .13rem;
            color: #ccc;
            display: block;
        }
    }
}
.publish-message{
    padding-left: .44rem;
    margin: .16rem 0 0 0;
    font-size: .13rem;
    line-height: .13rem;
    .publish-pic{
        margin-bottom: .15rem;
    }
    .publish-position{
        margin-top: .15rem;
        line-height: .19rem;
        i{
            display: inline-block;
            vertical-align: middle;
            width: .15rem;
            height: .19rem;
            background: url( ${require("assets/images/square/图层 13 拷贝@3x.png")} ) 0 0 no-repeat;
            background-size: 100%; 
            margin-right: .17rem;
        }
        span{
            display: inline-block;
            font-size: .13rem;
            color: #57E1E2;
            vertical-align: middle;
        }
    }
    .Interaction{
        float: right;
        padding-right: .31rem;
        i{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        vertical-align: middle;
        }
        span{
            display: inline-block;
            padding-left: .1rem;
            padding-right: .29rem;
            line-height: .13rem;
            color: #A3A3A3;
            vertical-align: middle;
        }
        .like{
            background: url(${require("assets/images/square/爱心@3x.png")}) no-repeat;
            background-size: 100%; 
        }
        .comment{
            background: url(${require("assets/images/square/图层 9 拷贝@3x.png")}) no-repeat;
            background-size: 100%; 
        }
        .collection{            
            background: url(${require("assets/images/square/图层 7 拷贝@3x.png")}) no-repeat;
            background-size: 100%; 
        }
    }
}`

export default StyleSquareItemUI