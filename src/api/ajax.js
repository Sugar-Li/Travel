/*
ajax请求模块
返回一个promise对象，使用嵌套的异步函数使得最终只需要调用ajax请求，即可返回promise.data数据
 */

import axios from 'axios'

export default function ajax(url = '', data = [], type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise

    if (type === 'GET') {
      //准备 url require参数数组
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + "&"
      })
      //移除多余的‘&’
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      //发送ajax请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }

    // 根据promise对象获取数据
    promise.then(response => {
      resolve(response.data)
    })
      .catch(err => {
        reject(err)
      })
  })
}
