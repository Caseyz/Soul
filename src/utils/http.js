const baseURL = 'https://wx.zhaoyx0907.com/api'
const urlReg = /^http[s]?:\/\/.+$/


export default {
  _OriginURL (url) {
    if( !urlReg.test(url) ) {
      url = baseURL + url
    }
    return url
  },
  _serialize(data) {
    let _arr = Object.keys(data).reduce( (arr, key)=>{
      arr[arr.length] = `${key}=${data[key]}`
      return arr
    }, [])
    return _arr.join('&')
  },
  post(url, data, opt) {
    return fetch(this._OriginURL(url), Object.assign({
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        credentials: 'include',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }, !!opt ? opt : {})
    )
    .then(res=>res.json())
    .then(result=>result)
  },
  get(url, data, opt) {
    url += Object.keys(data).length ? '?'+this._serialize(data) : ''
    return fetch(this._OriginURL(url), Object.assign({
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    }, !!opt ? opt : {}))
    .then(res=>res.json())
    .then(result=>result)
  }
}