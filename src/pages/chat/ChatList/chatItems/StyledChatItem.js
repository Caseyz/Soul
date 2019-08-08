import Styled from 'styled-components'
const StyledChatItem = Styled.div`
    width:100%;
    background:#fff;
    padding-left:.1rem;
    .item-container{
        border-bottom:1px solid #F5F6F7;
        width:100%;
        display:flex;
        padding:.1rem .1rem .1rem 0;
    }
    .left{
        flex:1;
        display:flex;
        align-items:center;
        div{
            padding-left:.1rem;
            display:flex;
            flex-direction:column;
            h4{
                font-size:.14rem;
                color:#57E1E2;
            }
            span{
                color:#999999;
                font-size:.15rem;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
        }
    }
    .right{
        span{
            color:#999999;
            font-size:.12rem;
        }
    }
`
export default StyledChatItem