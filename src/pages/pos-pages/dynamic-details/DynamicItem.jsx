import React, { Component } from 'react'
import Header from './Header'
import DynamicContent from './DynamicContent'
import { Container, CommentInput } from './styledComponents'
import CommentItem from './CommentItem'
import Tips from './Tips'
import Animate from 'components/high-order/Animate'

import http from 'utils/http'

class Comment extends Component {
  constructor(props) {
      super(props)
      this.state = {
         dynamic: '',
         comments: '',
         pagenum:1,
         pagesize:10,
         commentsCount: 0
      }
  }
  async componentDidMount() {
    let id=this.props.match.params.id
    let resDynamic = await http.get('/getdynamic', {
        id: id || '2'
    })
    let resComment = await http.get('/comment', {
        id: id || '2',
        pagenum: this.state.pagenum,
        pagesize: this.state.pagesize,
    })
    this.setState({
        dynamic: resDynamic,
        comments: resComment.comment,
        commentsCount: resComment.count
    })
  }
  render() {
    return (
      <div style={{display: 'flex', height: '100%', flexDirection: 'column'}}>
        <Header
          className={'around'}
          iconLeft={'back'}
          iconRight={'more'}
        >
            瞬间
        </Header>
        <Container>
            {
                this.state.dynamic!==''
                ? <DynamicContent dynamic={this.state.dynamic}></DynamicContent>
                : ''
            }
            {
                this.state.dynamic!==''
                ? <Tips></Tips>
                : ''
            }
            <div>
                {
                    this.state.comments!=='' && this.state.comments.map((item, index)=>{
                        return <CommentItem key={index} {...item} index={index}></CommentItem>
                    })
                }
            </div>
        </Container>
        <CommentInput hasBorder={true}>
            <div>
                <input type="text" placeholder='请输入评论'/>
            </div>
        </CommentInput>
      </div>
    )
  }
}
export default Animate(Comment)