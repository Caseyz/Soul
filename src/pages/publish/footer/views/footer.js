import styled from 'styled-components'

let Footer = styled.div`
    /* height:3.32rem; */
    width:100%;
    
    background: #fff;
`

let FooterTop = styled.div`
    padding:0 .2rem;
    height:.24rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .position{
        display:flex;
        align-items:center;
        >img{
            width:.19rem;
            height:.23rem;
            /* background: #000; */
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
            display:flex;
            flex-direction:column;
            padding: .1rem ;
            .selectTop{
               .seeRange{
                   color: #fff; 
                   font-size: .16rem;
                   font-weight:normal;                  
               } 
               .select {
                   display: flex ;
                   flex-wrap: wrap;
                   /* justify-content:space-between; */
                   .labelName{
                     font-size:.14rem;
                     color: #fff; 
                     font-weight:normal;   
                     margin:.05rem .06rem;             
                   }
                   input{
                       width:0;
                       height:0;
                   }
                   .iconfont {
                    margin:.05rem 0; 
                    position: relative;
                    top:.04rem;
                    height:.15rem;
                    width:.15rem;
                    border:1.5px solid #fff;
                    background: none;
                    border-radius:50%;
                   }
                   .icon-check-circle{
                       color: #fff;
                       background: rgba(39, 215, 205);
                       line-height: 1em;
                       height:.15rem;
                       border-radius:50%;
                       border: 0;
                       position: relative;
                       top:.04rem;
                   }
               }
               .control {
                   display: flex ;
                   flex-wrap: wrap;
                   /* justify-content:space-between; */
                   .labelName{
                     font-size:.14rem;
                     color: #fff; 
                     font-weight:normal;   
                     margin:.05rem .06rem;             
                   }
                   input{
                       width:0;
                       height:0;
                   }
                   .iconfont {
                    margin:.05rem 0; 
                    position: relative;
                    top:.04rem;
                    height:.15rem;
                    width:.15rem;
                    border:1.5px solid #fff;
                    background: none;
                    border-radius:50%;
                   }
                   .icon-check-circle{
                       color: #fff;
                       background: rgba(39, 215, 205);
                       line-height: 1em;
                       height:.15rem;
                       border-radius:50%;
                       border: 0;
                       position: relative;
                       top:.04rem;
                   }
               }
            }
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
let FooterMiddle = styled.div`
    width: 100%;
    /* height:.77rem; */
    background:#fff;
    display:flex;
    justify-content:space-around;
    align-items:center;
    .voice{
        
    }
`
// 0.324
export {
    Footer,
    FooterTop,
    FooterMiddle
}