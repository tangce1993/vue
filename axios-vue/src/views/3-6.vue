<template>
  <div class="home">
  </div>
</template>

<script>
// 用于取消正在运行的http请求（了解）
import axios from 'axios'
export default {
  name: 'Home',
  created () {
      let source = axios.CancelToken.source()
    //   取消token的请求
      axios.get('/data.json', {
          CancelToken: source.token
      }).then(res => {
          console.log(res)
      }).catch(err => {
          console.log(err)
      })
    //   取消请求(message可选)
    source.cancel('cancel http')
    // 什么情况会用到取消请求
    //商城3-5秒请求
  }
}
</script>
