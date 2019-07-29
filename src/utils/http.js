import axios from 'axios'
const baseURL = 'https://wx.zhaoyx0907.com/api/'

// const serialize = data => {
//   let arr=[]
//   Object.keys(data).reduce((arr,key)=>{
//     arr.push(`${key}=${data[key]}`)
//     return arr
//   },arr)
//   return arr.join('&')
// }

// export default {
//   post(url, data) {
//     let query = serialize(data)
//     console.log(query)
//     console.log(url)

//     return fetch(url, {
//       body: (data && JSON.stringify(data)) || '',
//       // body: query,
//       method: 'POST',
//       headers: new Headers({
//         'Access-Control-Request-Headers': 'Content-type:application/json',
//       })
//     }).then(response=>response.json())
//     .then(result=>result)
//   },
//   get(url, data) {
//     let query = serialize(data)
//     url += query.length ? `?${query}` : ''
//     return fetch(url, {
//       method: 'GET',
//       headers: new Headers(),
//     }).then(response=>response.json())
//     .then(result=>result)
//   }
// }

export default {
  post(url, data) {
    console.log(0)
    return axios.post(url, {
      baseURL,
      data: data,
      header: {
        'content-type': 'application/json'
      }
    }).then(res=>res)
  },
  get(url, params) {
    return axios.get(url, {
      baseURL,
      params,
    }).then(res=>res)
  }
}