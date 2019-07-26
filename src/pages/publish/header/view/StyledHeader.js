import styled from 'styled-components'
import border from 'components/style/border'

var Head1 = styled.div`
    width:100% ;
    height:100%;
    background: #fff;
    .header_top {
        height:.2rem;
        background: yellow;
    }

    .header_b {
        height:.34rem;
        background: pink;
        position:relative;

        .header_goBack_icon {
            width:.2rem;
            height:.2rem;
            position:absolute;
            left:.1rem;
            top:.12rem;
            background: #000;
        }

        .issue {
            width:.3rem;
            height:.2rem;
            position:absolute;
            right:.1rem;
            top:.12rem;
        }
    }
`
var Head = border({
    component:Head1,
    borderWidth:'0 0 1px 0',
    borderStyle:'solid',
    borderColor:'#ccc',
    borderRadius:0
})

export default Head