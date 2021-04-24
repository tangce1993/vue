<template>
  <div class="home">
  </div>
</template>

<script>
// 错误处理：请求错误时进行的处理
import axios from 'axios'
export default {
  name: '3-5错误处理',
  created () {
    axios.interceptors.request.use(config => {
        return config
    }, err => {
        return Promis.reject(err)
    })
    axios.interceptors.response.use(config => {
        return config
    }, err => {
        return Promise.reject(err)
    })
    axios.get('/data.json').then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    // eg:  实际开发过程中，一般添加统一的错误处理方法
    let instance = axios.create()
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        //请求错误,一般http状态码一般以4开头，常见的404not found,401超时
        $('#model').show();
        setTimeout(() => {
            $('#model').hiden()
        },2000)
        return Promis.reject(err)
    })
    instance.interceptors.response.use(config => {
        return config
    }, err => {
        // 响应错误处理，一般状态码以5开头，500系统错误，502系统重启    
         $('#model').show();
        setTimeout(() => {
            $('#model').hiden()
        },2000)
        return Pormise.reject(err)
    })
    instance.get('/data.json').then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
  }
}
</script>
