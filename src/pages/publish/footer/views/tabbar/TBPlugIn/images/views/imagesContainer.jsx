import React, { Component } from 'react'

class Images extends Component {
  constructor() {
    super()
    this.state = {
      localIds: '',
    }
  }

  render () {
    return (
      <div>asdasd</div>
    )
  }

  componentDidMount () {
    const that = this
    window.wx.ready(function () {
      window.wx.chooseImage({
        count: 4, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          that.localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          // console.log(localIds)
          // if(localIds.length <= 1){
          //     var a = document.createElement('img')
          //     a.src = localIds
          //     document.querySelector('#img').append(a)
          // }else{
          //     localIds.forEach(pic => {
          //         var a = document.createElement('img')
          //         a.src = pic
          //         document.querySelector('#img').append(a)
          //     });
          // }
          console.log(that.localIds)
        }
      });
    })
  }
}

export default Images
