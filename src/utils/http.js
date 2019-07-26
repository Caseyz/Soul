// import axios from 'axios'

export default {
  post(url, data) {
    return fetch(url, {
      body: (data && JSON.stringify(data)) || '',
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response=>response.json())
    .then(result=>result)
  },
  get(url, data) {
    return fetch(url, {
      body: (data && JSON.stringify(data)) || '',
      method: 'GET',
      headers: new Headers(),
      credentials: 'include',
    }).then(response=>response.json())
    .then(result=>result)
  }
}