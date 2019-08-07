import styled from 'styled-components'
const StyledFocusNav = styled.div`
    width:100%;
    height:.64rem;
    /* line-height:.64rem; */
    display:flex;
    div{
        flex:1;
        text-align:center;
        background-color:#fff;
        // border:1px solid red;
        justify-content:space-between;
        display:flex;
        flex-direction:column;
        
        strong{
            height:.28rem;
            line-height:.28rem;
        }
        i{
            span{
                flex:1;
                width:auto;
                display:inline-block;
                height:.36rem;
                line-height:.36rem;
                &.active{
                    color:blue;
                    border-bottom: 1px solid blue;
                }
            }
        }
        
    }
`
export default StyledFocusNav