<template>
  <div class="home">
  </div>
</template>

<script>
// axios实例
//后端接口地址有多个，并且超时时长不一样，需要设置多个实例
import axios from 'axios'
export default {
  name: 'Home',
  created () {
      let instance = axios.create({
          baseUrl: 'http://localhost:8080',
          timeout: 1000
      })
      let instance2 = axios.create({
          baseUrl: 'http://localhost:8081',
          timeout: 2000
      })
      instance.get('/data.json').then(res => {
          console.log('res', res)
      })
      instance2.get('/city.json').then(res => {
          console.log('res', res)
      })
  }
}
</script>
