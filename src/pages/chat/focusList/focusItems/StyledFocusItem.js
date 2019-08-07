import Styled from 'styled-components'
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
        width:.6rem;
    }
`
export default StyledFocusItem