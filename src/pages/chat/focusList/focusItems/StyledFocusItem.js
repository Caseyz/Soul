import Styled from 'styled-components'
import btnPic from 'assets/images/focus/btnBackground.png'
const StyledFocusItem=Styled.div`
    width:100%;
    background:#fff;
    display:flex;
    padding:.1rem;
    .left{
        flex:1;
        display:flex;
        align-items:center;
        div{
            padding-left:.1rem;
            display:flex;
            flex-direction:column;
            h4{
                font-size:.16rem;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
        }
    }
    .right{
        height:100%;
        line-height:.45rem;
        text-align:right;
        /* span{
            background-color:#FE2C55;
            vertical-align:middle;
            padding:.04rem .05rem .04rem .06rem; 
            border-radius:.05rem;
            line-height:.35rem;
            text-align:center;
            color:#fff;
            font-size:.1rem;
        }*/
    }
`
export default StyledFocusItem