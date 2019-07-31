import axios from 'axios'
const baseURL = 'https://wx.zhaoyx0907.com/api/'

export default {
  post(url, data) {
    return axios.post(url, data,{
      headers: {
        'content-type': 'application/json'
      },
      baseURL,
    }).then(res=>res.data)
  },
  get(url, params) {
    return axios.get(url, {
      baseURL,
      params,
    }).then(res=>res.data)
  }
}