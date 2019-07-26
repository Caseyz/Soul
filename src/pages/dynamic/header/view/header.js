import styled from 'styled-components'


const Head = styled.div`
    width:100% ;
    height:.44rem ;

    .header_top {
        height:10rem;
        background: yellow;
    }

    .header_b {
        height:.34rem;
        background: pink;
        position:relative;

        .header_goBack_icon {
            width:.08rem;
            height:.08rem;
            position:absolute;
            left:.1rem;
            top:.12rem;
        }

        .issue {
            width:.08rem;
            height:.08rem;
            position:absolute;
            right:.1rem;
            top:.12rem;
        }
    }
`

export default Head